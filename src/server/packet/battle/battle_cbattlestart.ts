import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';

import CBattleStart from '../../../data/def/battle/cbattlestart';
import SBattleStart from '../../../data/def/battle/sbattlestart';
import AttrType from '../../../data/bean/login/attrtype';
import Lineup from '../../../data/bean/login/lineup';
import RoleConfig from '../../../data/excel/role/roleconfig.json'
import SkillItem from '../../../data/bean/skill/beans/skillitem'
import BuildRoleLeft from '../../../data/common/Role/BuildRoleLeft';
import BuildMonsterRight from '../../../data/common/Role/BuildMonsterRight';
import GetBattleInfo from '../../../data/common/Battle/GetBattleInfo';
import CBattleInfo from '../../../data/excel/battle/cbattleinfo.json';
import CDungeonBattleConfig from '../../../data/excel/dungeonbattle/cdungeonbattleconfig.json';
import CResourceDungeonStage from '../../../data/excel/dungeonselect/cresourcedungeonstage.json';


export default async function(socket:any, rawData:Buffer) { 
    const client_message= CBattleStart.Unmarshal(rawData);
    console.log("battlestart",client_message)
    const User = new UserData(socket.userData);

    let lineupID=client_message.lineupID
    if(lineupID==0){
        lineupID=User.BattleInfo.DungeonInfo.lineupId
    }else{
        User.BattleInfo.DungeonInfo.lineupId=lineupID
    }

    const BattleInfo = await GetBattleInfo(socket,client_message)
    const getFixedNow = (function() {
        const fixedTimestamp = Date.now(); // 获取当前时间戳
        return function() { return fixedTimestamp; }; // 返回一个函数，它返回上面捕获的时间戳
    })();
    socket.inbattletime = getFixedNow();

    const OtherInfo = {
        battleBuffs:[]
    }

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

    switch(client_message.battleType){
        case CBattleStartProtocol.UNDECIDEDROAD:
            Object.assign(OtherInfo,{
                battleBuffs:User.ActivityInfo.undrChallengeInfo.buffs
            })
            User.ActivityInfo.undrChallengeInfo.buffs=[];
            break;
        default:
            User.ActivityInfo.undrChallengeInfo.buffs=[];
            User.ActivityInfo.undrChallengeInfo.score=0;
            break;
    }

    socket.send(CmdID.battle.sbattlestart,
        SBattleStart.Marshal({
            battleInfo:{
                id:BattleInfo.id,//2001 
                battleType:client_message.battleType,
                battleid:BattleInfo.battleID,//2001 
                battleSceneId:BattleInfo.battleSceneID,//场景ID
                lineId:BattleInfo.lineID,//线路ID
                left:BuildRoleLeft(socket,lineupID),
                right:BuildMonsterRight(socket,BattleInfo.Monster),
                assist: { // 助手
                    fightertype: 0, // 战斗者类型（默认为0）
                    id: 1, // ID（默认为0）
                    attrs: [], // 属性（空Map对象）
                    baseSkill: 0, // 基础技能（默认为0）
                    skills: [], // 技能（空数组）
                    passiveSkills: [], // 被动技能（空数组）
                    deadtype: 0, // 死亡类型（默认为0）
                    hpStrip: "", // 生命条（空字符串）
                    level: 1, // 等级（默认为0）
                    evolutionLevel: 0, // 进化等级（默认为0）
                    exclusiveLevel: 0, // 独特等级（默认为0）
                    equipSkills: [], // 装备技能（空数组）
                    skinId: 0, // 皮肤ID（默认为0）
                    autoExploreSkill: [], // 自动探索技能（空数组）
                    runeSkill: [], // 符文技能（空数组）
                },
                leftAssistNum:0,
                totalAssistNum:0,
                seed:0,
                guide:0,
                auto:{
                    autoFight:0, // 自动战斗
                    orderSKill:{ // 有序技能
                        roleId:0, // 角色ID
                        skillId:0, // 技能ID
                    },
                    disorderSkill:{ // 无序技能
                        roleId:0, // 角色ID
                        skillId:0, // 技能ID
                    },
                    eruptSkill:[], // 爆发技能
                    speed:0, // 速度
                    lock:0, // 锁定    
                },
                battleVerifyNum: 36000000n, // 战斗验证数量
                battleDuration: 36000000n, // 战斗持续时间
                battleBuffs: OtherInfo.battleBuffs,
            }
        })
    );

    socket.userData = User;
};

