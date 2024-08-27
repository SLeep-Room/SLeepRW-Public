import { CmdID } from '../../../data/CmdID';
import clientpool from '../../../index';
import SRefreshFriendInfos from '../../../data/def/chat/srefreshfriendinfos';
import {UserData} from '../../../db/UserData';

export default async function(socket:any) { 
    const User = new UserData(socket.userData);
    const AccountPool:UserData[] = Object.values(clientpool.AccountData);

    const UserList:typeof SRefreshFriendInfos.DefaultData.user = [];
    
    User.PlayerInfo.Friends.forEach((Element) => {
        const Account =  AccountPool.find(data=>data.AccountInfo.userid===Element.userId) as UserData;
        if(Account===undefined){
            console.log("未找到好友数据")
        }else{
            UserList.push({
                baseUserData:{
                    userId : Account.PlayerInfo.UserInfo.userid,
                    userName : Account.PlayerInfo.UserInfo.username,
                    avatarId : Account.PlayerInfo.UserInfo.avatarId,
                    frameId : Account.PlayerInfo.UserInfo.frameId,
                    userLv : Account.PlayerInfo.UserInfo.userlevel,
                    showBadges : [],//徽章
                    spiritvip : 1,//精灵vip
                    iplocaladdr : Account.PlayerInfo.UserInfo.iplocaladdr,
                },
                identity : Element.identity,//身份
                lastLogoutTime : Account.AccountInfo.lastLogoutTime,//最后登出时间
                friendTime : Element.friendTime,//好友时间
                messages : Element.message,//消息
                lastOnLineTime : Account.AccountInfo.lastOnLineTime,//最后在线时间
                likeStatus : Element.likeStatus,//喜欢状态
                sparkStatus : Element.sparkStatus,//spark状态
            });
        }
    });

    socket.send(CmdID.chat.srefreshfriendinfos, SRefreshFriendInfos.Marshal({
        user : UserList, 
    }))
}