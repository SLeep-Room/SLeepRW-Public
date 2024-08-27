import { CmdID } from '../../../data/CmdID';

import CRefreshFriendInfos from '../../../data/def/chat/crefreshfriendinfos';
import SRefreshFriendInfos from '../../../server/import/chat/srefreshfriendinfos';

export default async function(socket:any, rawData:Buffer) { 
    
    const client_message= CRefreshFriendInfos.Unmarshal(rawData);

    await SRefreshFriendInfos(socket);
    
};

