import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';
import CBattleEnd from '../../../data/def/battle/cbattleend';
import SBattleEnd from '../../../data/def/battle/sbattleend';
import SFirstPassResourceScene from '../../../data/def/battle/sfirstpassresourcescene';
import AddItem from '../../../data/common/Item/AddItem';

import CSceneInfoStatic from '../../../data/excel/scene/csceneinfostatic.json';
import UpRoleExp from '../../../data/common/Role/UpRoleExp';

import GuidTypesEnum from '../../../data/bean/user/guidtypes';
import GetBattleInfo from '../../../data/common/Battle/GetBattleInfo';
import BattleResult from '../../../data/bean/battle/battleresult';


export default async function(socket:any, rawData:Buffer) { 
  const User = new UserData(socket.userData);
  const client_message= CBattleEnd.Unmarshal(rawData);
  console.log("cbattleend",client_message);
  
  const BattleInfo = await GetBattleInfo(socket,client_message)
  const LineupRoles = User.PlayerInfo.Lineups.find(data=>data.id==User.BattleInfo.DungeonInfo.lineupId);
  const roleExp = [];
  const roleIndex = [];

  const EndRoles={
    roleIdList: [],
    roleLvList: [],
    roleBreakList: [],
    roleSkinList: [],
    runeLevelList: []
  }


  LineupRoles.roles.forEach(([key,roleid])=> {
    if(roleid!=0){
      roleExp.push([roleid,2000n]);
      roleIndex.push(roleid);
      UpRoleExp(socket, roleid, 2000);
      const role=User.PlayerInfo.Roles.find(data=>data.id==roleid);
      EndRoles.roleIdList.push(roleid);
      EndRoles.roleLvList.push(role.lv);
      EndRoles.roleBreakList.push(role.breakLv);
      EndRoles.roleSkinList.push(role.skin);
      EndRoles.runeLevelList.push(role.runeLevel);
    };
  });

  enum BattleResult{
    BATTLE_SUCCESS = 1,
    BATTLE_SUCCESS_GM = 2,
    BATTLE_SUCCESS_TIMEOUT = 3,
    BATTLE_SETTLE = 4,
    BATTLE_FAIL = 11,
    BATTLE_RETREAT = 12,
    BATTLE_FAIL_TIMEOUT = 13,
    BATTLE_FAIL_GM = 14,
    BATTLE_TIE = 15,
  }

  const BattleResultEnum = {
    FAILED: 0,
    SUCCESS: 1,
    SETTLE: 2,
}
  let failTime = 0;
  if(client_message.result==BattleResult.BATTLE_FAIL){
    failTime=Date.now()-socket.inbattletime;
  }

  const {AddItemInfos} = await AddItem(socket,[[35001,10000]]);
  socket.send(CmdID.battle.sbattleend,
    SBattleEnd.Marshal({
      battleType:client_message.battletype, //战斗类型
      id:BattleInfo.id, //战斗ID
      battleResult: {
        battleId:BattleInfo.battleID, //战斗ID
        result:client_message.result, //战斗结果
        failTime:failTime,
        resourceFirstWin:0, //资源首次获得胜利
      },
      itemList:AddItemInfos, //物品列表
      money:[[35002,10000n]], //货币
      battleTime:BigInt(Date.now()-socket.inbattletime), //战斗时间
      playerExp:20, //玩家经验
      roleExp:roleExp, //角色经验
      roleGoodCurExp:[], //角色的好感度当前经验
      roleGoodLv:[], //角色的好感度
      roleGoodExp:[], //角色的好感度经验
      rolesIndex:roleIndex, //角色索引
    })
  );

  const CBattleStartProtocol = {
    TOWER: 1,// 1. 城堡
    SHATTERED: 2,// 2. 破碎
    DUNGEON: 3,// 3. 地牢
    TEST: 4,// 4. 测试
    RESOURCE: 5,// 5. 资源
    BOSS_RUSH: 6,// 6. BOSS rush
    ARENA: 7,// 7. 竞技场
    STARRY: 8, // 8. 星际   
    UNDECIDEDROAD: 9,// 9. 未定之路
    SUMMER: 10,// 10. 夏日
    CHRISTMAS: 11,// 11. 圣诞
    SPRING_FESTIVAL: 12,// 12. 春节
    LOVER: 13,// 13. 情侣
    WEEK_BOSS: 14,// 14. 周BOSS
    ANNIVERSARY: 15,// 15. 周年
    STARRY_MIRROR: 16,// 16. 星际镜像
    SUMMER_ECHO: 17,// 17. 夏日回声
  };

  switch(client_message.battletype){
    case CBattleStartProtocol.UNDECIDEDROAD:
      if(client_message.result==BattleResult.BATTLE_SUCCESS){
        if(socket.score>=3700){
          console.log("bug点",socket.score,socket.buffs);
          
        }
        User.ActivityInfo.undrChallengeLogs.push({
          finishTime:BigInt(Date.now()),
          score: 3000+socket.score,
          time: BigInt(Date.now()-socket.inbattletime),
          roleIdList: EndRoles.roleIdList,
          roleLvList: EndRoles.roleLvList,
          roleBreakList: EndRoles.roleBreakList,
          roleSkinList: EndRoles.roleSkinList,
          runeLevelList: EndRoles.runeLevelList,
        });
      }
      break;
    case CBattleStartProtocol.DUNGEON:
      
      break;
  }

  Object.assign(socket,{
    score:0,
    buffs:[]
  });
  
  socket.userData=User;
};

