import { CmdID } from '../../../data/CmdID';
import clientpool from '../../../index';
import CSearchUser from '../../../data/def/chat/csearchuser';
import SSearchUser from '../../../data/def/chat/ssearchuser';
import SSendMsgNotify from '../../../data/def/notify/ssendmsgnotify';

import {UserData} from '../../../db/UserData';

export default async function(socket:any, rawData:Buffer) { 
    const User = new UserData(socket.userData);
    const IdentityType = {
        FRIEND: 1,//好友
        BLACK_LIST: 2,//黑名单
        APPLICANT: 3,//申请
        SEARCH: 4,//搜索
        ADD: 5,//添加
        STRANGER: 6,//陌生人
    }

    const client_message= CSearchUser.Unmarshal(rawData);
    const AccountPool:UserData[] = Object.values(clientpool.AccountData);
    
    const FriendData = AccountPool.find(data=>BigInt(data.AccountInfo.userid)===BigInt(client_message.Keyword))

    if(!FriendData){
        socket.send( CmdID.notify.ssendmsgnotify ,
            SSendMsgNotify.Marshal({
                msgId:100191,
                parameters:[]
          })
        );
        return;
    }

    let FriendSetting = FriendData.PlayerInfo.Friends.find(data=>
        data.userId===FriendData.PlayerInfo.UserInfo.userid
    );
    if(!FriendSetting){
        FriendSetting={
            userId:0n,
            identity:IdentityType.STRANGER,
            friendTime:0n,
            message:[],
            likeStatus:0,
            sparkStatus:0,
        }
    }

    const UserList:typeof SSearchUser.DefaultData.users={
        baseUserData:{
            userId : FriendData.PlayerInfo.UserInfo.userid,
            userName : FriendData.PlayerInfo.UserInfo.username,
            avatarId : FriendData.PlayerInfo.UserInfo.avatarId,
            frameId : FriendData.PlayerInfo.UserInfo.frameId,
            userLv : FriendData.PlayerInfo.UserInfo.userlevel,
            showBadges : [],//徽章
            spiritvip : 1,//精灵vip
            iplocaladdr : FriendData.PlayerInfo.UserInfo.iplocaladdr,
        },
        identity : FriendSetting.identity,//身份
        lastLogoutTime : FriendData.AccountInfo.lastLogoutTime,//最后登出时间
        friendTime : FriendSetting.friendTime,//好友时间
        messages : FriendSetting.message,//消息
        lastOnLineTime : FriendData.AccountInfo.lastOnLineTime,//最后在线时间
        likeStatus : FriendSetting.likeStatus,//喜欢状态
        sparkStatus : FriendSetting.sparkStatus,//spark状态
    };

    socket.send( CmdID.chat.ssearchuser ,
        SSearchUser.Marshal({
            users:UserList
      })
    );
};

