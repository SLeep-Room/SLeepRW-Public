import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';
import SLineupInfo from '../../../data/def/login/slineupinfo';
//import clientPool from '../../../index';

export default async function(socket:any) { 
    const User = new UserData(socket.userData);
    const OtherUserInfoEnum = {
        FRIEND: 1,
        BLACK_LIST: 2,
        APPLICANT: 3,
        SEARCH: 4,
        ADD: 5,
        STRANGER: 6,
    }

    //const OtherUsers:UserData[] = Object.values(clientPool.AccountData)
    
    //console.log(clientPool.AccountData[socket.account]["LineupList"])
    const SLineup = SLineupInfo.Marshal({
        commonLinupId : 1,//地宫探险队伍 (1-5)
        towerLineupId : 1001,//爬塔队伍 (1001-1005)
        bossRushLineupId : 4001,//boss挑战队伍(4001-4999)
        autoExploreLineupId : 5001,//(5001)
        guardRestoreLineupId : 6001,//守护恢复型资源副本队伍(6001-6002)
        damageStabLineupId : 6003,//刺杀破坏型资源副本队伍(6003-6004)
        magicImpairLineupId : 6005,//魔导妨害型资源副本队伍(6005-6006)
        undecidedRoadLineupId : 7000,//未定之路队伍(7000-7001)
        springFestivalLineupId : 8000,//新年活动队伍(8000-8003)
        srChallengeLineupId:9000,//夏日回响挑战队伍(9000-9001)
        lineupList : User.PlayerInfo.Lineups,
        supportRole:{//支援角色
            role:{
                isLeader : 0,
                id : 0,
                birthday : BigInt(0), // Using BigInt for int64 types
                breakLv : 0,
                lv : 0,
                exp : BigInt(0), // Using BigInt for int64 types
                lock : 0,
                properties : [],
                contractSkill : [], // Assuming this will be an array of objects with the specified structure
                passiveskill : [], // Assuming this will be an array of objects with the specified structure
                equips : [],
                preSetEquips : [],
                evolution : 0,
                curLvBasePro : [],
                nextLvBasePro : [],
                breakLvRange : [],
                nextEvolutionLvBasePro : [],
                power : 0,
                energy : 0,
                redDot : 0,
                relationLevel : 0,
                skin : 0,
                goodProgress : 0,
                receiveList : [],
                unlockedNode : [],
                suitSkills : [], // Assuming this will be a Map of objects with the specified structure
                specialWeaponLevel : 0,
                addPercent : [],
                runeLevel : 0,
            },
            user:{
                baseUserData : {
                    userId: BigInt(0), // Using BigInt for int64 types
                    userName: '',
                    avatarId: 0,
                    frameId: 0,
                    userLv: 0,
                    showBadges: [],
                    spiritvip:0,
                    iplocaladdr:''
                },
                identity : 0,
                lastLogoutTime : BigInt(0), // Using BigInt for int64 types
                friendTime : BigInt(0), // Using BigInt for int64 types
                messages : [], 
                lastOnLineTime : BigInt(0),
                likeStatus : 0,
                sparkStatus : OtherUserInfoEnum.STRANGER,
            }   
        }
    });

    socket.send(
        CmdID.login.slineupinfo,
        SLineup
    );
    
}