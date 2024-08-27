import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';
import CCreateUser from '../../../data/def/user/ccreateuser';
import SCreateUser from '../../../data/def/user/screateuser';

export default async function(socket:any, rawData:Buffer) { 
    const User = new UserData(socket.userData);
    
    const client_message= CCreateUser.Unmarshal(rawData);
    User.PlayerInfo.UserInfo.username = client_message.name;//改名字
    socket.send(CmdID.user.screateuser,
        SCreateUser.Marshal(
            {
                username: User.PlayerInfo.UserInfo.username,
            }
        )
    );

    socket.userData=User;
};

