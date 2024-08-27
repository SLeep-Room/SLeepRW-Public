import CMonsterMove from '../../../data/def/battle/cmonstermove';
import { UserData } from '../../../db/UserData';

export default async function (socket: any, rawData: Buffer) {
  const User = new UserData(socket.userData);
  //解析客户端消息
  const client_message = CMonsterMove.Unmarshal(rawData);

  console.log(client_message.monsters)
}


