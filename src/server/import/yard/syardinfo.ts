import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';
import SYardInfo  from '../../../data/def/yard/syardinfo';

export default async function(socket:any) { 
    const User = new UserData(socket.userData);
    socket.send( CmdID.yard.syardinfo ,
        SYardInfo.Marshal(User.PlayerInfo.YardInfo)
    );
}