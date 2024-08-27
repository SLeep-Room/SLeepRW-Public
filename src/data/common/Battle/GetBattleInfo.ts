import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';

import CDungeonBattleConfig from '../../../data/excel/dungeonbattle/cdungeonbattleconfig.json';
import CBattleInfo from '../../../data/excel/battle/cbattleinfo.json';
import CWeidingBattleConfig from "../../../data/excel/dungeonselect/cweidingbattleconfig.json";


import MainLineTable from '../../../data/excel/dungeonselect/cdungeonselectmainline.json';
import ResourceStageTable from '../../../data/excel/dungeonselect/cresourcedungeonstage.json';
import CStarrymirrorlevel from '../../../data/excel/dungeonselect/cstarrymirrorlevel.json';
import CHEXAGONBATTLECONFIG from  '../../../data/excel/dungeonselect/chexagonbattleconfig.json';
import CHEXAGONFUNCTION from '../../../data/excel/activity/chexagonfunction.json';
import CInterfaceFunction from "../../../data/excel/dungeonselect/cinterfacefunction.json";
import CValentineInterfaceFunction from "../../../data/excel/dungeonselect/cvalentineinterfacefunction.json";
import CFragmentLevelCfg from "../../../data/excel/dungeonselect/cfragmentlevelcfg.json";
import CBattleConfig from "../../../data/excel/battle/cbattleconstcfg.json";
import CAnniversarylevel from "../../../data/excel/dungeonselect/canniversarylevel.json"
import CSRFunction from "../../../data/excel/activity/csrfunction.json"
import CSRResourceDungeonStage from "../../../data/excel/activity/csrresourcedungeonstage.json"

import CSceneinfoStatic from "../../../data/excel/scene/csceneinfostatic.json"

import CMonsterConfig from '../../../data/excel/npc/cmonsterconfig.json';

export default async function (socket: any, message: any) {
    const User = new UserData(socket.userData);

    const InitBattleInfo={
        id:0,
        battleID:0,
        lineID:0,
        battleSceneID:0,
        Monster:[],
    };

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

    enum LoadType {
        Base = 0,//主城场景
        CommonDungeon = 1,//普通地宫场景
        CommonDungeonBattle = 2, //普通地宫战斗场景
        BossBattle = 3, //boss 战斗场景
        InGame = 4, //login 场景
        FirstScene = 5, // 初章场景
        HandBook = 6, //图鉴
        SwimSuit = 7, //泳装海岛
        SwimSuitEchoes = 8
    };

    const MonsterTable =Object.values(CMonsterConfig.Data)
    
    try{
        //const DungeonBattleConfig=Object.values(CDungeonBattleConfig.Data).find(data => data.id === message.id);
        let BattleInfo = null;
        if(!message.battleType){
            message.battleType=message.battletype
        }

        if(!BattleInfo){
            switch(message.battleType){
                case CBattleStartProtocol.TOWER:
                    InitBattleInfo.id=message.id;
                    break;
                case CBattleStartProtocol.DUNGEON:
                    const DUNGEON = Object.values(CDungeonBattleConfig.Data).find(data=>data.id===message.id);
                    const Sceneinfo = Object.values(CSceneinfoStatic.Data).find(data => data.id===DUNGEON.Sceneid);

                    BattleInfo=Object.values(CBattleInfo.Data).find(data => data.id === DUNGEON.BattleID);
                    InitBattleInfo.id=message.id;
                    InitBattleInfo.battleID=BattleInfo.id;
                    InitBattleInfo.lineID=parseInt(DUNGEON.Lineid)
                    InitBattleInfo.battleSceneID=Sceneinfo.id; 

                    break;
                case CBattleStartProtocol.TEST:
                    BattleInfo=Object.values(CBattleInfo.Data).find(data => data.id === message.id);
                    InitBattleInfo.id=message.id;
                    InitBattleInfo.battleID=message.id;
                    InitBattleInfo.lineID=0;
                    InitBattleInfo.battleSceneID=20007;
                    break;
                case CBattleStartProtocol.RESOURCE:
                    let RESOURCE = Object.values(ResourceStageTable.Data).find(data=>data.id===message.id);
                    if(RESOURCE){
                        const MonsterData = MonsterTable.find(data => 
                            data.shapeID === RESOURCE.shapeID &&
                            data.npcLevel === RESOURCE.levelShow
                        );
    
                        BattleInfo=Object.values(CBattleInfo.Data).find(data => 
                            data.bossID === MonsterData.id &&
                            data.enemyPositions.includes(`${MonsterData.id}@100`)
                        );
                    }else{
                        BattleInfo=Object.values(CBattleInfo.Data).find(data => data.id === message.id);
                        const MonsterData = MonsterTable.find(data => data.id === BattleInfo.bossID);
                        RESOURCE = Object.values(ResourceStageTable.Data).find(data=>
                            data.shapeID === MonsterData.shapeID &&
                            data.levelShow === MonsterData.npcLevel
                        );
                    }
                    
                    InitBattleInfo.id=BattleInfo.id;
                    InitBattleInfo.battleID=BattleInfo.id;
                    InitBattleInfo.lineID=0;
                    InitBattleInfo.battleSceneID=RESOURCE.sceneID; 
                    break;
                case CBattleStartProtocol.UNDECIDEDROAD:
                    BattleInfo=Object.values(CBattleInfo.Data).find(data => data.id === message.id);
                    InitBattleInfo.id=message.id;
                    InitBattleInfo.battleID=message.id;
                    InitBattleInfo.lineID=0;
                    InitBattleInfo.battleSceneID=20031;
                    break;
                default:
                    BattleInfo=Object.values(CBattleInfo.Data).find(data => data.id === message.id);
                    break;
            }
        }

        if(BattleInfo){
            BattleInfo.enemyPositions.forEach((monster_data:string)=>{
                if(monster_data!="0"){
                    InitBattleInfo.Monster.push(MonsterTable.find(data => data.id === parseInt(monster_data.split('@')[0])) );
                }    
            });
        }
        
    }catch(e){
        console.log(e)
    }
    //console.log(InitBattleInfo)
    
    return InitBattleInfo;
}

    /*** 
    const BuildInfo = {
        id:0,
        record:null,
    }
    if(message.battletype==CBattleStartEnum.DUNGEON){
        BuildInfo.id = getMainLineIdBySceneId(message.id);
        BuildInfo.record = MainLineTable.Data[BuildInfo.id.toString()];
    }else if(message.battletype==CBattleStartEnum.RESOURCE){
        BuildInfo.id = message.id;
        BuildInfo.record = ResourceStageTable.Data[BuildInfo.id.toString()];
    }else if(message.battletype==CBattleStartEnum.STARRY || message.battletype==CBattleStartEnum.STARRY_MIRROR){
        BuildInfo.id = message.id;
        BuildInfo.record = CStarrymirrorlevel.Data[BuildInfo.id.toString()];
    }else if(message.battletype==CBattleStartEnum.SUMMER){
        BuildInfo.id = message.id;
        const bettleID = CHEXAGONFUNCTION.Data[BuildInfo.id.toString()].battleID;
        BuildInfo.record = Object.values(CHEXAGONBATTLECONFIG.Data).find(data => data.id === bettleID);
    }else if(message.battletype==CBattleStartEnum.SUMMER_ECHO){
        BuildInfo.id = message.id;
        const levelID = CSRFunction.Data[BuildInfo.id.toString()].levelID;
        BuildInfo.record = CSRResourceDungeonStage.Data[levelID.toString()];
    }else if(message.battletype==CBattleStartEnum.CHRISTMAS){
        BuildInfo.id = message.id;
        const bettleID = Object.values(CInterfaceFunction.Data).find(data => data.id === BuildInfo.id).battleID;
        BuildInfo.record = Object.values(CHEXAGONBATTLECONFIG.Data).find(data => data.id === bettleID);
    }else if(message.battletype==CBattleStartEnum.LOVER){
        BuildInfo.id = message.id;
        const bettleID = Object.values(CValentineInterfaceFunction.Data).find(data => data.id === BuildInfo.id).battleID;
        BuildInfo.record = Object.values(CHEXAGONBATTLECONFIG.Data).find(data => data.id === bettleID);
    }else if(message.battletype==CBattleStartEnum.SHATTERED){
        BuildInfo.id = message.id;
        const battleID = Object.values(CValentineInterfaceFunction.Data).find(data => data.id === BuildInfo.id).battleID;
        BuildInfo.record = Object.values(CFragmentLevelCfg.Data).find(data => data.battleID === battleID);
    }else if(message.battletype==CBattleStartEnum.ANNIVERSARY){
        BuildInfo.id = message.id;
        BuildInfo.record = Object.values(CAnniversarylevel.Data).find(data => data.id === BuildInfo.id);
    }

    function getMainLineIdBySceneId(sceneId:number) {
        let mainLineId:number;
        let lastMainLineSceneId:number;
        const worldID = parseInt(sceneId.toString().substring(2, 3));
        const allIds = MainLineTable.AllIds;
        for (let i = 0; i < allIds.length; i++) {
            const id = allIds[i];
            const mainLineRecord = MainLineTable.Data[id.toString()];
            if (parseInt(mainLineRecord.sceneid.toString().substring(2, 3)) === worldID) {
                if (sceneId < mainLineRecord.sceneid && lastMainLineSceneId) {
                    mainLineId = id - 1;
                    break;
                } else if (sceneId === mainLineRecord.sceneid) {
                    mainLineId = id;
                    break;
                }
                lastMainLineSceneId = mainLineRecord.sceneid;
            }
        }
        return mainLineId;
    }
    */

