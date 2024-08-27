import { CmdID } from '../../../data/CmdID';

import CChangeSupportRole from '../../../data/def/chat/cchangesupportrole';
import SChangeSupportRole from '../../../data/def/chat/schangesupportrole';
import { UserData } from '../../../db/UserData';
import SSendAssistRoles from '../../../server/import/chat/ssendassistroles';

export default async function(socket:any, rawData:Buffer) {
    const User = new UserData(socket.userData);
    const client_message= CChangeSupportRole.Unmarshal(rawData);

    socket.send(CmdID.chat.schangesupportrole,
        SChangeSupportRole.Marshal({
            roleIds: client_message.roleId
        })
    );
    
    User.PlayerInfo.AssetsRoleInfo.supportRole = client_message.roleId;
    await SSendAssistRoles(socket);

    socket.userData = User;
}