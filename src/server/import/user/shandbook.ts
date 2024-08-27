import { CmdID } from '../../../data/CmdID';
import SHandbook from '../../../data/def/user/shandbook';
import {UserData} from '../../../db/UserData';

export default async function(socket:any) { 
    const User = new UserData(socket.userData);
    socket.send(CmdID.user.shandbook, SHandbook.Marshal(User.PlayerInfo.HandbookInfo))
}