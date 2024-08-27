
import { CmdID } from '../../../data/CmdID';
import { randomUUID } from 'crypto';

import CLogin from '../../../data/def/common/clogin';
import SLogin from '../../../data/def/common/slogin';
import SOffline from '../../../data/def/common/soffline';
import SGameLogin from '../../import/login/sgamelogin';
import InitUser from '../../../data/common/User/InitUser';
import { UserData } from '../../../db/UserData';
import clientPool from '../../../index';

export default async function (socket: any, rawData: Buffer) {
  const { token, account, deviceId, clientVersion } = CLogin.Unmarshal(rawData)

  if (!token) {
    socket.token = randomUUID();
  }

  if (!clientPool.AccountData[account]) {
    socket.account = account;
    await InitUser(socket)
  }

  Object.assign(socket, {
    account: account,
    token: token,
    deviceId: deviceId,
    isOnline: true,
    clientVersion: clientVersion,
    userData: clientPool.AccountData[account],//给socket添加用户数据
  });

  const User = new UserData(socket.userData);

  socket.send(CmdID.common.slogin, SLogin.Marshal({
    userid: User.AccountInfo.userid,
    token: User.AccountInfo.token,
    needActive: (User.AccountInfo.needActive ? 1 : 0),
    serverId: 101,
  }))

  await SGameLogin(socket);

  User.ActivityInfo.undrChallengeInfo={
    entries:0,
    score:0,
    buffs:[]
  }

  socket.userData=User;
}