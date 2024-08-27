
import { CmdID } from '../data/CmdID';
import { UserData } from '../db/UserData';
import SEnterDungeon from '../server/import/battle/senterdungeon';
import CSceneInfoStatic from '../data/excel/scene/csceneinfostatic.json';//场景
import SceneJump from '../data/excel/scene/cscenejump.json';//场景跳转

export default async function (socket: any, command: any) {
    const User = new UserData(socket.userData);
    try{
        command=parseInt(command);
        let SceneInfo = Object.values(CSceneInfoStatic.Data).find(data=>data.id===command);

        if(SceneInfo===undefined){
            console.log("场景不存在",command);
            return;
        }
        
        if(SceneInfo.name.startsWith("战斗场景-")){
            console.log("场景为战斗场景",command);
            return;
        }
        
        const Jump=Object.values(SceneJump.Data).find(data => data.id === SceneInfo.id);
        User.BattleInfo.DungeonInfo.lastbattleid = User.BattleInfo.DungeonInfo.id;
        User.BattleInfo.DungeonInfo.id = SceneInfo.id;

        
        if(Jump!=undefined){
            console.log(Jump);
            User.BattleInfo.DungeonInfo.point = {
                x: parseInt(Jump.enterID.split(",")[0]), // x坐标
                y: parseInt(Jump.enterID.split(",")[1]), // y坐标
                dir: parseInt(Jump.enterDirection), // 方向
            };
        }else{
            User.BattleInfo.DungeonInfo.point = {
                x: 0, // x坐标
                y: 0, // y坐标
                dir: 0, // 方向
            };
        }
        
        console.log("进入场景",SceneInfo.name ,command);
        await SEnterDungeon(socket);
    }catch(e){
        console.log(e);
    }
}