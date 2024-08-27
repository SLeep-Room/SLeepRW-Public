import DungeonWorld from '../../../data/bean/battle/dungeonworld';
import ResourceWord from '../../../data/bean/battle/resourceword';
import { CmdID } from '../../../data/CmdID';

import COpenBossPanel from '../../../data/def/battle/copenbosspanel';
import SOpenBossPanel from '../../../data/def/battle/sopenbosspanel';

export default async function(socket:any) { 

    socket.send( CmdID.battle.sopenbosspanel ,
        SOpenBossPanel.Marshal({
          bosses : [],
        })
      );

}