import { CmdID } from '../../../data/CmdID';

import { UserData } from '../../../db/UserData';
import CEnterDungeon from '../../../data/def/battle/centerdungeon';
import DungeonType from '../../../data/bean/battle/dungeontype';
import SEnterDungeon from '../../import/battle/senterdungeon';

export default async function(socket:any,rawData:Buffer) { 
    const User = new UserData(socket.userData);
    const client_message= CEnterDungeon.Unmarshal(rawData);

    User.BattleInfo.DungeonInfo.lineupId = client_message.lineupId;
    
    await SEnterDungeon(socket,client_message.id);
};
