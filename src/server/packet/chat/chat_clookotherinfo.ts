import { CmdID } from '../../../data/CmdID';
import clientpool from '../../../index';
import CLookOtherInfo from '../../../data/def/chat/clookotherinfo';
import SLookOtherInfo from '../../../data/def/chat/slookotherinfo';
import {UserData} from '../../../db/UserData';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CLookOtherInfo.Unmarshal(rawData);
    const User = new UserData(socket.userData);
    //console.log(client_message)
    const AccountPool:UserData[] = Object.values(clientpool.AccountData);
    const FriendData = AccountPool.find(data=>BigInt(data.AccountInfo.userid)===BigInt(client_message.userId))

    if(FriendData===undefined){
        console.log("未找到好友数据")
        return;
    }
    const assets ={
        support:{
            roleId : 0,
            roleLv : 0,
            breakLv : 0,
            skin : 0,
        },
        display:[],
    };

    const Support=FriendData.PlayerInfo.Roles.find(data=>data.id===FriendData.PlayerInfo.AssetsRoleInfo.supportRole)
    if(Support){
        assets.support={
            roleId : Support.id,
            roleLv : Support.lv,
            breakLv : Support.breakLv,
            skin : Support.skin,
        }
    }
    if(FriendData.PlayerInfo.AssetsRoleInfo.displayRole.length>0){
        FriendData.PlayerInfo.AssetsRoleInfo.displayRole.forEach(item => {
            const Display=FriendData.PlayerInfo.Roles.find(data=>data.id===item);
            assets.display.push({
                id : Display.id,
                breakLv : Display.breakLv,
                lv : Display.lv,
                properties : Display.properties,
                contractSkill : Display.contractSkill,
                passiveskill : Display.passiveskill,
                equips : Display.equips,
                evolution : Display.evolution,
                curLvBasePro : Display.curLvBasePro,
                power : Display.power,
                skin : Display.skin,
                specialWeaponLevel : Display.specialWeaponLevel,
                runeLevel : Display.runeLevel,
            })
        });
    }


    const UserList:typeof SLookOtherInfo.DefaultData={
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
        title : FriendData.PlayerInfo.UserInfo.username,
        introduce : FriendData.PlayerInfo.UserInfo.introduce,
        support : assets.support,
        display : assets.display,
        likedNum : FriendData.PlayerInfo.UserInfo.likedNum,
    };

    socket.send( CmdID.chat.slookotherinfo ,
        SLookOtherInfo.Marshal(UserList)
    );
};

