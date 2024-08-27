import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';

import CReceiveAward from '../../../data/def/activity/creceiveaward';
import SReceiveAward from '../../../data/def/activity/sreceiveaward';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CReceiveAward.Unmarshal(rawData);
    const User = new UserData(socket.userData);
    
    socket.send( CmdID.activity.sreceiveaward ,
        SReceiveAward.Marshal({
            actId: client_message.actId,
            index: [],
            itemInfo: []
        })
    );
};

