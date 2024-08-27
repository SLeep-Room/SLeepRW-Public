import { CmdID } from '../../../data/CmdID';

import CSendPartyMsg from '../../../data/def/chat/csendpartymsg';
import SSendPartyMsg from '../../../data/def/chat/ssendpartymsg';
import SSendHistoryChatMsg from '../../../data/def/chat/ssendhistorychatmsg';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CSendPartyMsg.Unmarshal(rawData);
    //console.log(client_message)

    socket.send( CmdID.chat.ssendpartymsg ,
        SSendPartyMsg.Marshal({
        msgInfo:{
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
            position:1,
            sendTime:BigInt(Date.now()),
            msgType:1,
            msg:client_message["msg"],
            hyperlinks:client_message["hyperlinks"],
        }
      })
    );

    socket.send( CmdID.chat.ssendhistorychatmsg ,
        SSendHistoryChatMsg.Marshal({
            msgInfo:[
                {
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
                    position:1,
                    sendTime:BigInt(Date.now()),
                    msgType:1,
                    msg:client_message["msg"],
                    hyperlinks:client_message["hyperlinks"],
                }
            ]
        })
      );


    

};

