import { CmdID } from '../../../data/CmdID';

import CRefreshRecommendedFriends from '../../../data/def/chat/crefreshrecommendedfriends';
import SSendRecommendedFriends from '../../../data/def/chat/ssendrecommendedfriends';

export default async function(socket:any, rawData:Buffer) { 
    
    const client_message= CRefreshRecommendedFriends.Unmarshal(rawData);

    socket.send(CmdID.chat.ssendrecommendedfriends,
        SSendRecommendedFriends.Marshal(
            {
                users:[]
            }
        )
    );
    
};

