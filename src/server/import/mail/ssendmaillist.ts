import { CmdID } from '../../../data/CmdID';
import SSendMailList from '../../../data/def/mail/ssendmaillist';
import {UserData} from '../../../db/UserData';

export default async function(socket:any) {
    const User = new UserData(socket.userData);
    
    socket.send( CmdID.mail.ssendmaillist ,
        SSendMailList.Marshal({
            mails : User.PlayerInfo.Mails,
	        maxNum : User.PlayerInfo.Mails.length,
      })
    );
}