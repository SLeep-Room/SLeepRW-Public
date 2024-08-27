import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';
import SRecordGuide from '../../../data/def/user/srecordguide';

export default async function (socket: any, GuideID: number) {
    const User = new UserData(socket.userData);
    User.PlayerInfo.UserInfo.guides.push([GuideID, 1]);
    socket.send( CmdID.user.srecordguide ,
        SRecordGuide.Marshal({
            guide:GuideID,
        })
    );
    
    socket.userData=User;
}