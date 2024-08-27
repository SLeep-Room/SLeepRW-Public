
import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';
import CChooseBackGround from '../../../data/def/user/cchoosebackground';
import SChooseBackGround from '../../../data/def/user/schoosebackground';

export default async function(socket:any, rawData:Buffer) {
    const User = new UserData(socket.userData);
    const client_message= CChooseBackGround.Unmarshal(rawData);

    socket.send( CmdID.user.schoosebackground ,
        SChooseBackGround.Marshal({
            roleId : client_message.roleId,
	        skin : client_message.skin,
        })
    );
    
    User.PlayerInfo.UserInfo.backgroundRole=client_message.roleId;
    User.PlayerInfo.UserInfo.backgroundSkin=client_message.skin;
    
    socket.userData = User;
};

