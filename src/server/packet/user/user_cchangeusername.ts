import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';
import CChangeUsername from '../../../data/def/user/cchangeusername';
import SChangeUsername from '../../../data/def/user/schangeusername';

export default async function(socket:any, rawData:Buffer) {
    const User = new UserData(socket.userData);
    const client_message= CChangeUsername.Unmarshal(rawData);

    socket.send(CmdID.user.schangeusername,
        SChangeUsername.Marshal(
            {
                name: client_message.name,
            }
        )
    );
    User.PlayerInfo.UserInfo.username = client_message.name;//改名字

    socket.userData=User;
};

