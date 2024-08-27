import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';
import CErasenewrolereddot from '../../../data/def/login/cerasenewrolereddot';

export default async function (socket: any, rawData: Buffer) {
  const User = new UserData(socket.userData);

  const client_message = CErasenewrolereddot.Unmarshal(rawData);
  const roleindex=User.PlayerInfo.Roles.findIndex(data=>data.id===client_message.roleId);
  User.PlayerInfo.Roles[roleindex].redDot=0;

  socket.userData=User;
}