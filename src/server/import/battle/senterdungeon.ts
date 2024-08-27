
import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';

import SEnterDungeon from '../../../data/def/battle/senterdungeon';

import SCancelLoading from '../../../data/def/notify/scancelloading';
import CDungeonBattleConfig from '../../../data/excel/dungeonbattle/cdungeonbattleconfig.json';//场景
import CSceneInfoStatic from '../../../data/excel/scene/csceneinfostatic.json';//场景
import CDungeonSelectMainLine from '../../../data/excel/dungeonselect/cdungeonselectmainline.json';//场景
import SceneJump from '../../../data/excel/scene/cscenejump.json';//场景跳转
import BattleResult from '../../../data/bean/battle/battleresult';

export default async function(socket:any,sceneid:number=socket.userData.BattleInfo.DungeonInfo.id) {
    const User = new UserData(socket.userData);
    
    let DungeonInfo ={
        monsterIds:[],
        movableMonstersPosition:[],
        battleSceneId:0,
        point:{
            x:0,
            y:0,
            dir:0,  
        }
    };

    let SceneInfo = Object.values(CSceneInfoStatic.Data).find(data=>data.id===sceneid);
    let MainLine = Object.values(CDungeonSelectMainLine.Data).find(data=>data.id===sceneid)
    if(MainLine==undefined){
        MainLine = Object.values(CDungeonSelectMainLine.Data).find(data=>data.sceneid===sceneid)
        if(MainLine==undefined){
            MainLine = Object.values(CDungeonSelectMainLine.Data).find(data=>data.wordId===sceneid)
        }
    }
    if(SceneInfo==undefined){
        SceneInfo = Object.values(CSceneInfoStatic.Data).find(data=>data.id===MainLine.sceneid);
    }
    
    const Jump=Object.values(SceneJump.Data).find(data => data.id === SceneInfo.id);
    const LastJump=Object.values(SceneJump.Data).find(data => data.aimSceneID[0] === SceneInfo.id);
    let lastbattleid=0;
    if(LastJump!=undefined){
        lastbattleid=LastJump.id;
    }

    User.BattleInfo.DungeonInfo.lastbattleid = lastbattleid;
    User.BattleInfo.DungeonInfo.id = SceneInfo.id;
    
    
    if(Jump!=undefined){
        console.log("跳转场景：",Jump);
        DungeonInfo.point = {
            x: parseInt(Jump.enterID.split(",")[0]), // x坐标
            y: parseInt(Jump.enterID.split(",")[1]), // y坐标
            dir: parseInt(Jump.enterDirection), // 方向
        };
    }
    
    const objects:typeof SEnterDungeon.DefaultData.objects={
        items : [],
        objs : [],
        npcs : [],
        monsterIds : [],
        movableMonstersPosition : [],
        box : [],
    }
    
    /***  //先不生成怪物 打完会卡死
    const BattleConfig =Object.values(CDungeonBattleConfig.Data).find(data=>data.Sceneid===SceneInfo.id)
    if(BattleConfig!=undefined){
        DungeonInfo.battleSceneId=BattleConfig.Sceneid;
        objects.monsterIds.push(BattleConfig.id);
        objects.movableMonstersPosition.push([
            BattleConfig.id,{
            x: parseInt(BattleConfig.Situation.split(',')[0])*400,
            y: 0,
            dir: 0,
        }]);
    };
    */

    User.BattleInfo.DungeonInfo.point=DungeonInfo.point;
        
    const DungeonData:typeof SEnterDungeon.DefaultData={
        id : User.BattleInfo.DungeonInfo.id,
        lineupId : User.BattleInfo.DungeonInfo.lineupId,
        point : User.BattleInfo.DungeonInfo.point,
        reconnect : {
            kind:1,
            value:1,
        },
        traps : [{
            instanceid: 0,
            id: 0,
            state: 0
        }],
        switches : [{
            instanceid: 0,
            id: 0,
            state: 0,
            touch: 0
        }],
        objects : objects,
        points : [],
        prePoints : [],
        activedOptionIds : [],
        specialPoint : [],
        gold : 0n,
        lastbattleid : User.BattleInfo.DungeonInfo.lastbattleid,
        battleresult : User.BattleInfo.DungeonInfo.battleresult,
        curBattleInfo:{//不进入场景战斗无效
            id:sceneid,
            battleType:0,
            battleid:0,//2001
            battleSceneId:DungeonInfo.battleSceneId,
            lineId:0,
            left:[],
            right:[],
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
            battleVerifyNum: 0n, // 战斗验证数量（对于int64使用BigInt）
            battleDuration: 0n, // 战斗持续时间（同上）
            battleBuffs: [],
        },
        modules:[],
        mapOpened:1,
        buffs:[],
    };

    console.log("进入战斗地图：",User.BattleInfo.DungeonInfo);

    socket.send( CmdID.battle.senterdungeon ,
        SEnterDungeon.Marshal(DungeonData)
    );

    socket.send( CmdID.notify.scancelloading ,
        SCancelLoading.Marshal({
            protocolType:CmdID.battle.centerdungeon
        })
    );

    socket.userData=User;//保存数据到socket
};

