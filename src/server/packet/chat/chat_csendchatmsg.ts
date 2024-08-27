import { CmdID } from '../../../data/CmdID';

import CSendChatMsg from '../../../data/def/chat/csendchatmsg';
import SSendChatMsg from '../../../data/def/chat/ssendchatmsg';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CSendChatMsg.Unmarshal(rawData);
    //console.log(client_message)

    socket.send( CmdID.chat.ssendchatmsg ,
      SSendChatMsg.Marshal({
        baseUserData:{
            userId:socket.userData.UserInfo.userid,
            userName:socket.userData.UserInfo.username,
            avatarId:socket.userData.UserInfo.avatarId,
            frameId:socket.userData.UserInfo.frameId,
            userLv:socket.userData.UserInfo.userlevel,
            showBadges:[],
            spiritvip:1,
            iplocaladdr:socket.userData.UserInfo.iplocaladdr,
        },
        channelType:client_message["channelType"],
        msg:client_message["msg"],
        severId:101,
        hyperlinks:client_message["hyperlinks"],
      })
    );


};

