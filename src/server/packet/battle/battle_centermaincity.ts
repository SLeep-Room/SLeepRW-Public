import { CmdID } from '../../../data/CmdID';

import CEnterMainCity from '../../../data/def/battle/centermaincity';
import SCancelLoading from '../../../data/def/notify/scancelloading';
import SEnterMainCity from '../../../server/import/battle/sentermaincity';

export default async function (socket: any, rawData: Buffer) {
  const client_message =CEnterMainCity.Unmarshal(rawData);
  //更新角色位置信息
  await SEnterMainCity(socket);
  socket.send( CmdID.notify.scancelloading ,
    SCancelLoading.Marshal({
        protocolType:CmdID.battle.centermaincity,
    })
  );
}


