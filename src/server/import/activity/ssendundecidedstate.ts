import { CmdID } from '../../../data/CmdID';
import SSendUndecideState from '../../../data/def/activity/ssendundecidedstate';
import {UserData} from '../../../db/UserData';

export default async function(socket:any) { 
    const User = new UserData(socket.userData);
    
    socket.send(CmdID.activity.ssendundecidedstate, SSendUndecideState.Marshal({
        state: 1, //-- 状态 1-开启 0-关闭
    }))
}