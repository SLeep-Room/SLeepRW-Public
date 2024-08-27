import CRoleMove from '../../../data/def/battle/crolemove';
import { UserData } from '../../../db/UserData';

export default async function (socket: any, rawData: Buffer) {
  const User = new UserData(socket.userData);
  //解析客户端消息
  const client_message = CRoleMove.Unmarshal(rawData);

  //更新角色位置信息
  User.BattleInfo.DungeonInfo.point = {
      x: client_message.position.x, // x坐标
      y: client_message.position.y, // y坐标
      dir: client_message.position.dir, // 方向
  };

  console.log(client_message)
}


