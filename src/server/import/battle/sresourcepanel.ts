import DungeonWorld from '../../../data/bean/battle/dungeonworld';
import ResourceWord from '../../../data/bean/battle/resourceword';
import { CmdID } from '../../../data/CmdID';

import CResourcePanel from '../../../data/def/battle/cresourcepanel';
import SResourcePanel from '../../../data/def/battle/sresourcepanel';

import CResourceDungeonInfo from '../../../data/excel/dungeonselect/cresourcedungeoninfo.json';
import CResourceDungeonStage from '../../../data/excel/dungeonselect/cresourcedungeonstage.json';

export default async function(socket:any) { 
    const ResourceWordEnum = {
        LOCK: 0,
        UNSTART: 1,
        UNCLEAR: 2,
        CLEAR: 3,
    }

    const ResourceZoneEnum = {
        UNSTART: 0,
        UNCLEAR: 1,
        CLEAR: 2,
    }

    const ResourcePassEnum = {
        LOCK: 0,
        UNCLEAR: 1,
        CLEAR: 2,
    }
    
    socket.send( CmdID.battle.sresourcepanel ,
        SResourcePanel.Marshal({
            words:[
                [1,{
                    status:ResourceWordEnum.CLEAR,//1 nerver 0 stop
                    zones:[
                        [101,{
                            status:ResourceZoneEnum.CLEAR,// 设置资源区域的初始状态为清除
                            starttime:"0",// 设置开始时间为0
                            endTime:99999999999999n,// 设置结束时间为99999999999999
                            passes:BuildPasses(101),// 设置通过次数为101
                            curStage:0,// 设置当前阶段为0
                        }]
                    ]
                }],
                [2,{
                    status:ResourceWordEnum.CLEAR,//1 nerver 0 stop
                    zones:[
                        [201,{
                            status:ResourceZoneEnum.CLEAR,
                            starttime:"0",
                            endTime:99999999999999n,
                            passes:BuildPasses(201),
                            curStage:0
                        }],
                        [202,{
                            status:ResourceZoneEnum.CLEAR,
                            starttime:"0",
                            endTime:99999999999999n,
                            passes:BuildPasses(202),
                            curStage:0
                        }],
                        [203,{
                            status:ResourceZoneEnum.CLEAR,
                            starttime:"0",
                            endTime:99999999999999n,
                            passes:BuildPasses(203),
                            curStage:0
                        }],
                    ]
                }],
                [3,{
                    status:ResourceWordEnum.CLEAR,//1 nerver 0 stop
                    zones:[
                        [301,{
                            status:ResourceZoneEnum.CLEAR,
                            starttime:"0",
                            endTime:99999999999999n,
                            passes:BuildPasses(301),
                            curStage:0
                        }]
                    ]
                }],
                [4,{
                    status:ResourceWordEnum.CLEAR,//1 nerver 0 stop
                    zones:[
                        [401,{
                            status:ResourceZoneEnum.CLEAR,
                            starttime:"0",
                            endTime:99999999999999n,
                            passes:BuildPasses(401),
                            curStage:0
                        }],
                        [402,{
                            status:ResourceZoneEnum.CLEAR,
                            starttime:"0",
                            endTime:99999999999999n,
                            passes:BuildPasses(402),
                            curStage:0
                        }],
                        [403,{
                            status:ResourceZoneEnum.CLEAR,
                            starttime:"0",
                            endTime:99999999999999n,
                            passes:BuildPasses(403),
                            curStage:0
                        }],
                    ]
                }],
            ],
      })
    );

    function BuildPasses(dungeonID:number) {
        const ResourceStage = Object.values(CResourceDungeonStage.Data).filter(data=>data.dungeonID===dungeonID);
        if(ResourceStage==undefined){
            console.log("can not find dungeonID:",dungeonID);
            return [];
        }
        const passes=[];
        ResourceStage.forEach(data=>{
            passes.push([
                data.id,
                {
                    status : ResourcePassEnum.CLEAR,
                    level : data.levelShow,
                    process : 1,
                    spirit : data.spirit,
                    firstItems : [],
                    randItems : [],
                    activityItems : [],
                    first : 1,//首次为1 非首次为0 
                }
            ]);
        });
        return passes;
    }
}