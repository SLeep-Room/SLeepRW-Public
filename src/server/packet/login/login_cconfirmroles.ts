import { CmdID } from '../../../data/CmdID';

import { UserData } from '../../../db/UserData';
import CConfirmRoles from '../../../data/def/login/cconfirmroles';
import UpdateLineup from '../../../data/common/Lineup/UpdateLineup';

export default async function(socket:any, rawData:Buffer) { 
    const User = new UserData(socket.userData);
    const client_message= CConfirmRoles.Unmarshal(rawData);
    //console.log(client_message)
    client_message.roles.forEach(async ([sort,roleid])=>{
        await UpdateLineup(socket,client_message["lineupId"],sort,roleid)
    })
    
};

