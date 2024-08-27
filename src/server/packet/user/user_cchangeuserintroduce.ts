import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';

import CChangeUserIntroduce from '../../../data/def/user/cchangeuserintroduce';
import SChangeUserIntroduce from '../../../data/def/user/schangeuserintroduce';

export default async function(socket:any, rawData:Buffer) { 
    const User = new UserData(socket.userData);
    const client_message= CChangeUserIntroduce.Unmarshal(rawData);

    socket.send(CmdID.user.schangeuserintroduce,
        SChangeUserIntroduce.Marshal(
            {
                introduce:client_message.introduce
            }
        )
    );
    User.PlayerInfo.UserInfo.introduce = client_message.introduce;

    socket.userData = User;
};

