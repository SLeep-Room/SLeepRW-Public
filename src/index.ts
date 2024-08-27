import { Socket } from 'net';
import { echo } from 'coa-echo';
import { UserData } from './db/UserData';
import { CoaClient, CoaClientPool, CoaTcp } from './util/tcp/index';
import { getHandler } from './server/handler';
//加载配置文件 来初始化服务器
import { Config , GetProtocolType , TextMap , writeJson} from './data/LoadConfig';
import { Varint } from './util/varint';

class RWClient extends CoaClient {
  private buffer: Buffer = Buffer.alloc(0);
  // 接收到数据

  async attachSendMethod(socket: { send: (CmdID: any, Packet_Buffer: Buffer) => void; write: (arg0: Buffer) => void; }) {
    socket.send = (CmdID:number, Packet_Buffer:Buffer) => {
      const protocolName = GetProtocolType(CmdID);
      if (!protocolName) {
        echo.warn(`[Server] ${TextMap.CanotFoundProtocolName}: ${CmdID}`, );
        return;
      }
      echo.green(`[Server] ${TextMap.ReceivedPacket}: ${protocolName}`);
      try {
        const CmdID_Buffer = Varint.encode(CmdID);
        const head = Varint.encode(CmdID_Buffer.length + Packet_Buffer.length);
        const back = Buffer.concat([head, CmdID_Buffer, Packet_Buffer]);
        //console.log(back);
        socket.write(back); // 确保这里处理异步操作
      } catch (error) {
        echo.error(`[Error] ${TextMap.SendPacketError}: ${error}`);
      }
    };
  }
  
  async onData(raw: Buffer) {
    try {
      await this.attachSendMethod(this.socket);//增加send方法
      this.buffer = Buffer.concat([this.buffer, raw]);
      const [head,headIndex] = Varint.decode(this.buffer,0);
      const unknow = this.buffer.slice(headIndex,this.buffer.length-head);
      const packet = this.buffer.slice(headIndex+1,this.buffer.length);
      this.buffer = this.buffer.slice(this.buffer.length);

      const [protocolType, protocolOffset] = Varint.decode(packet,0);
      //获取协议名
      //console.log(head,parseInt(unknow.toString('hex'),16),packet.length,protocolType)
      const ProtocolName = GetProtocolType(protocolType);

        //根据协议名获取处理器
      const handler = getHandler(ProtocolName);
      
      if (handler) {
        const handler_buffer = packet.slice(protocolOffset+1,packet.length);
        echo.green(`[Client] ${TextMap.SendPacket}: ${ProtocolName}`);
        //调用处理器
        await handler(this.socket, handler_buffer);
      } else {
        echo.warn(`[Server] ${TextMap.NotFoundHandler}: ${ProtocolName} ( ${protocolType} )`);
      }
    } catch (error) {
      echo.error(`[Error] ${TextMap.UnknowError}: ${error}`);
    }
  }

  // 上线
  async onOnline(deviceId: string) {
    echo.cyan(`[Connect] ${deviceId} ${TextMap.ClientLoginSuccess}`)
  }

  // 下线
  async onOffline(deviceId: string) {
    try{
      echo.grey(`[DisConnect] ${deviceId} ${TextMap.ClientDisConnect}`)
      
      this.socket.userData.online = false;
      this.socket.userData.lastLogoutTime = BigInt(Date.now());

      this.socket.displayRole=0;
      await writeJson('src/data/Accounts.json',clientPool.AccountData)

      echo.cyan(`[Save] 服务器保存数据成功`);
    }catch(e){
      echo.error(`[Error] ${TextMap.UnknowError}: ${e}`);
    }
  }
}

class CustomClientPool extends CoaClientPool<RWClient> {
  newClient(socket: Socket) {
    return new RWClient(
      socket,
      `Session:${++this.increment}`,
      'RWClient'
    )
  }
}

// 创建一个客户端连接池
import Accounts from './data/Accounts.json'

const clientPool = new CustomClientPool()
clientPool.AccountData=Accounts;
// 创建一个tcp服务
const tcpServer = new CoaTcp(clientPool, Config.GameServer.port)

import httpServer from './http/http';
// 启动TCP服务
tcpServer.start();
// 启动HTTP服务

httpServer.listen(Config.SdkServer.port, () => {
  echo.cyan(`[SDK] Listening on port ${Config.SdkServer.port}`);
});

setInterval(async () => {
  await writeJson('src/data/Accounts.json',clientPool.AccountData);
  echo.cyan(`[Save] 服务器保存数据成功`);
}, 60000); // 60000毫秒等于1分钟

export default clientPool;
