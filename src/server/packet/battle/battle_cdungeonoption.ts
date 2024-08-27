import { CmdID } from '../../../data/CmdID';

import CDungeonOption from '../../../data/def/battle/cdungeonoption';
import SDungeonOption from '../../../data/def/battle/sdungeonoption';

export default async function (socket: any, rawData: Buffer) {
  const client_message = CDungeonOption.Unmarshal(rawData);

  socket.send( CmdID.battle.sdungeonoption ,
    SDungeonOption.Marshal({
        optionId: client_message.optionId,
        items:[]
    })
  );
}


