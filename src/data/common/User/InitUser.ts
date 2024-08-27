import clientPool from '../../../index';
import SysConfig from '../../../data/bean/user/sysconfig';
import AddRole from '../../../data/common/Role/AddRole';
import BuildLineupList from '../../../data/common/Lineup/BuildLineupList';

import {UserData} from '../../../db/UserData';

export default async function(socket:any) { 
    const BagTypes = {
        BAG: 1,
        EQUIPBAG: 4,
        VALUABLEBAG: 5,
        FURNITURE_BAG: 6,
    };
    const uid = 10000 + Object.keys(clientPool.AccountData).length;

    const Account:UserData={
      AccountInfo:{
        account:socket.account,
        userid: BigInt(uid),
        token: socket.token,
        needActive: false,
        online: true,
        lastLogoutTime: 0n,
        lastOnLineTime: 0n,
      },
      PlayerInfo:{
        UserInfo: {
          userid: BigInt(uid),
          username: "",
          userlevel: 1,
          userexp: 0,
          strengthLimit: 5,
          serverId: 101,
          isNew: 1,
          guides: [],
          buffGuides: [],
          procedures: [],
          power: 0,
          avatarId: 1,
          frameId: 1,
          introduce: "",
          configs: [
            [SysConfig.music, 1], // 音乐, 开启
            [SysConfig.musicNum, 1], // 音乐高度
            [SysConfig.soundEffect, 1], // 音效, 开启
            [SysConfig.soundEffectNum, 1], // 音效数量, 10种
            [SysConfig.dubbing, 1], // 配音, 开启
            [SysConfig.dubbingNum, 1], // 配音数量, 10段
            [SysConfig.quality, 1], // 画质, 1级
            [SysConfig.UIDisplay, 1], // 用户界面显示, 关闭
            [SysConfig.sysChat, 1], // 系统聊天, 开启
            [SysConfig.worldChat, 1], // 世界聊天, 开启
            [SysConfig.guideChat, 1], // 引导聊天, 开启
            [SysConfig.boxOpen, 1], // 宝箱开启, 开启
            [SysConfig.moveType, 1], // 移动类型, 1型
            [SysConfig.showBuff, 1], // 显示增益效果, 开启
            [SysConfig.rockerType, 1], // 摇杆类型, 1型
            [SysConfig.autoBattleMode, 1] // 自动战斗模式, 开启
          ],
          phoneNum: "",
          mailAddr: "",
          isGM: 1,
          tips: [],
          npcTips: [],
          enchant_MaNa: 0,
          createTime: BigInt(Date.now()),
          backgroundRole: 0,
          backgroundSkin: 0,
          guest: 1, //(0 游客 1 非游客)
          likedNum: 0,
          iplocaladdr: ""
        },
        HeadInfo: {
          avatars: [],
          frames: []
        },
        AssetsRoleInfo:{
          supportRole: 0,
          displayRole: []
        },
        HandbookInfo:{
          equips: [],
          monsters: [],
          roles: [],
          npc: [],
          worlds: [],
          forces: [],
          activities: [],
          soulNums: [],
          lockedRoles: []
        },
        TaskInfo:{
          majorTasks: [],
          branchTasks: [],
          dailyTasks: [],
          characterTasks: [],
          achieveTasks: [],
          weekBossTasks: [],
          taskChoices: []
        },
        SpiritInfo:{
          spirit: 0,
          strengthLimit: 0,
          leftTime: 0n,
          recoverTimes: []
        },
        YardInfo:{
          magicTree: {
            level: 0,
            tasks: [],
            speed: 0
          },
          cavern: {
            level: 0,
            tasks: [],
            refreshNums: 0,
            leftRefreshTime: 0n
          },
          lampStand: {
            id: 0,
            level: 0,
            leftRefreshTime: 0n,
            lampTask: [],
            LightSpots: [],
            leftRefreshLightSpotTime: 0n,
            glowwormLevel: 0,
            speed: 0,
            white: 0n,
            dark: 0n,
            mix: 0n
          },
          alchemy: {
            id: 0,
            buildLevel: 0,
            alchemyLevel: 0,
            alchemyStage: 0,
            alchemyExperience: 0,
            roleId: 0
          },
          room: {
            name: '',
            id: 0,
            level: 0,
            floors: [],
            defaultTheme: []
          },
          trainRoom: {
            id: 0,
            level: 0,
            trainList: []
          },
          music: {
            id: 0,
            level: 0,
            songs: []
          }
        },
        Bags: [
          [BagTypes.BAG, {
            capacity: 0,
            items: [],
          }],
          [BagTypes.EQUIPBAG, {
            capacity: 0,
            items: [],
          }],
          [BagTypes.VALUABLEBAG, {
            capacity: 0,
            items: [],
          }],
          [BagTypes.FURNITURE_BAG, {
            capacity: 0,
            items: [],
          }],
        ],
        Roles: [], // 初始化角色
        Lineups: await BuildLineupList(socket),
        Friends:[],
        Mails: [],
        Skins:[],
        DrawCardLogs:[],
      },
      BattleInfo:{
        DungeonInfo: {
          id: 30002, // 层id
          lineupId: 1, // 阵容Id
          point: {
            x: 0,
            y: 0,
            dir: 0,
          },
          lastbattleid: 0, // 最后一场战斗的id
          battleresult: 0, // 最后一场战斗的结果
        },
        DungeonDatas:[]
      },
      ActivityInfo: {
        undrChallengeLogs: []
      },
    }

    const User = new UserData(Account)

    clientPool.AccountData[socket.account]=User;//将Account添加到池
    socket.userData=User;//增加到socket方便调用
  
    await AddRole(socket,1);//添加魔女角色到角色列表
}