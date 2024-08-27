import { CmdID } from '../../../data/CmdID';

import CTransaction from '../../../data/def/battle/ctransaction';
import STransaction from '../../../data/def/battle/stransaction';

import CDungeonSelectMainline from '../../../data/excel/dungeonselect/cdungeonselectmainline.json';
import CBoxConfig from '../../../data/excel/sceneinteractive/cboxconfig.json';

export default async function (socket: any, rawData: Buffer) {
  const client_message = CTransaction.Unmarshal(rawData);

  socket.send( CmdID.battle.stransaction ,
    STransaction.Marshal({
        kind:client_message.kind,
        value:client_message.value,
    })
  );

  socket.userData.DungeonInfo.reconnect={
    kind:client_message.kind,
    value:client_message.value,
  }
}


