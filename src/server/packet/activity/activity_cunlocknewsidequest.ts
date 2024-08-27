import { CmdID } from '../../../data/CmdID';

import CUnlockNewSideQuest from '../../../data/def/activity/cunlocknewsidequest';
import SUnlockNewSideQuest from '../../../data/def/activity/sunlocknewsidequest';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CUnlockNewSideQuest.Unmarshal(rawData);
    //console.log(client_message)

    socket.send( CmdID.activity.sunlocknewsidequest ,
        SUnlockNewSideQuest.Marshal({
            result : 1,
	        dungeonID : client_message.unlockDungeonID,
      })
    );
};

