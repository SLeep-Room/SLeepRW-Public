import { CmdID } from '../../../data/CmdID';
import SSendAssistRoles from '../../../data/def/chat/ssendassistroles';
import {UserData} from '../../../db/UserData';

export default async function(socket:any) { 
    const User = new UserData(socket.userData);
    
    socket.send(CmdID.chat.ssendassistroles,
        SSendAssistRoles.Marshal(User.PlayerInfo.AssetsRoleInfo)
    );
}