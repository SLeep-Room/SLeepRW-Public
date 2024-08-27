import { CmdID } from '../../../data/CmdID';

import CExploreOption from '../../../data/def/battle/cexploreoption';
import SUpdateExploreState from '../../../data/def/battle/supdateexplorestate';

export default async function (socket: any, rawData: Buffer) {
  const client_message = CExploreOption.Unmarshal(rawData);

  //更新角色位置信息

  socket.send( CmdID.battle.supdateexplorestate ,
    SUpdateExploreState.Marshal({
        traps:[],
        switches:[
          {
            instanceid: client_message.instanceid,
            id:  client_message.id,
            state:0,
            touch:0,
          }
        ]
    })
  );
}


