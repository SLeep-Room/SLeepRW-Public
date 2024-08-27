import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';
import SSendHeadInfo from '../../../data/def/user/ssendheadinfo';

export default async function(socket:any) { 
    const User = new UserData(socket.userData);

    socket.send(CmdID.user.ssendheadinfo, SSendHeadInfo.Marshal(User.PlayerInfo.HeadInfo))
}