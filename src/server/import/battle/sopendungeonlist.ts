import { CmdID } from '../../../data/CmdID';
import SOpenDungeonList from '../../../data/def/battle/sopendungeonlist';
import DungeonWorld from '../../../data/bean/battle/dungeonworld';

import CDungeonSelectMainline from '../../../data/excel/dungeonselect/cdungeonselectmainline.json'
import CDungeonSelectWorld from '../../../data/excel/dungeonselect/cdungeonselectworld.json'

function buildWorld(){
    const world:typeof SOpenDungeonList.DefaultData.world = [];
    Object.values(CDungeonSelectWorld.Data).forEach(worlddata=>{
        const totalZones=worlddata.floorlist.length;
        let zoneInfo:typeof DungeonWorld.DefaultData.zone=[];
        
        worlddata.floorlist.forEach((floor,index)=>{
            const MainLine=CDungeonSelectMainline.Data.find(data => data.id === floor);

            zoneInfo.push([MainLine.id,{
                isReceived:0,
                autoExplore:0,
                openedBoxes:0,
                totalBoxes:0,
                checkPoint:{
                    sceneId:MainLine.sceneid,
                    spirit:MainLine.spirit,
                    isPass:1,
                    openedBoxes:0,
                    totalBoxes:0,
                },
                smallPoint:[
                    {
                        sceneId: MainLine.sceneid,  // 场景ID
                        spirit: MainLine.spirit,  // 精神
                        isPass: 1,  // 是否通过
                        openedBoxes: 0,  // 已打开的宝箱数
                        totalBoxes: 0,  // 总宝箱数
                    }
                ]
            }]);
        });
        world.push([worlddata.id,{
            curZone: 0,  // 当前区域
            clearZones: 0,  // 清除区域
            totalZones: totalZones,  // 总区域
            isReceived: 1,  // 是否已接收
            zone:zoneInfo
        }])
    });
    return world;
}

export default async function(socket:any) { 

    socket.send(CmdID.battle.sopendungeonlist,
        SOpenDungeonList.Marshal({
            world:buildWorld()
        })
    );
}