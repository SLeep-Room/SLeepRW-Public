import SLineupInfo from '../../../data/def/login/slineupinfo';

export default async function(socket:any) { 
    let lineupList:typeof SLineupInfo.DefaultData.lineupList=[];
    //编译初始lineup
    lineupList=BuildLineup(lineupList,1,4,"地宫探险队伍");
    lineupList=BuildLineup(lineupList,1001,1004,"爬塔队伍");
    lineupList=BuildLineup(lineupList,4001,4004,"boss挑战队伍");
    lineupList=BuildLineup(lineupList,5001,5001,"autoExplore队伍");
    lineupList=BuildLineup(lineupList,6001,6002,"守护恢复型资源副本队伍");
    lineupList=BuildLineup(lineupList,6003,6004,"刺杀破坏型资源副本队伍");
    lineupList=BuildLineup(lineupList,6005,6006,"魔导妨害型资源副本队伍");
    lineupList=BuildLineup(lineupList,7000,7001,"未定之路队伍");
    lineupList=BuildLineup(lineupList,8000,8003,"新年活动队伍");
    lineupList=BuildLineup(lineupList,9000,9001,"夏日回响挑战队伍");
    
    function BuildLineup(lineupList:typeof SLineupInfo.DefaultData.lineupList,start:number,end:number,name:string){
        let defaultRole = start === 1 ? 1 : 0;
        for (let start_num=start; start_num <= end; start_num++) {
            lineupList.push({
                id:start_num,
                name:`${start_num}`,
                roles:[
                    [1,0],
                    [2,0],
                    [3,defaultRole],
                    [4,0],
                    [5,0],
                    [6,0],

                ],
                skill:0,
                power:0
            });
        }
        return lineupList;
    }
    return lineupList;
}