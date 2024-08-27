import { CmdID } from '../../../data/CmdID';

import CRefreshSupportRoleList from '../../../data/def/chat/crefreshsupportrolelist';
import SRefreshSupportRoleList from '../../../data/def/chat/srefreshsupportrolelist';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CRefreshSupportRoleList.Unmarshal(rawData);

    socket.send( CmdID.chat.srefreshsupportrolelist ,
      SRefreshSupportRoleList.Marshal({
        rolesFromFriends:[],
        rolesFromStrangers:[],
      })
    );


};

