import { CmdID } from '../../../data/CmdID';

import CChangDisplayRoles from '../../../data/def/chat/cchangedisplayroles';
import SChangDisplayRoles from '../../../data/def/chat/schangedisplayroles';
import { UserData } from '../../../db/UserData';
import SSendAssistRoles from '../../../server/import/chat/ssendassistroles';

export default async function(socket:any, rawData:Buffer) {
    const User =  new UserData(socket.userData);
    const client_message= CChangDisplayRoles.Unmarshal(rawData);

    if(socket.displayRole==undefined){
        socket.displayRole = 0;
    }
    const addindex = client_message.roleIds.length-socket.displayRole;
    let roleIds = client_message.roleIds.slice(-(client_message.roleIds.length-addindex));

    socket.send(CmdID.chat.schangedisplayroles,
        SChangDisplayRoles.Marshal({
            roleIds : roleIds
        })
    );

    User.PlayerInfo.AssetsRoleInfo.displayRole=roleIds;
    socket.displayRole = client_message.roleIds.length;
    await SSendAssistRoles(socket);

    socket.userData=User;
}