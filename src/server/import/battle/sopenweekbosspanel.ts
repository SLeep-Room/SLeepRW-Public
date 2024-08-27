import { CmdID } from '../../../data/CmdID';
import SOpenWeekBossPanel from '../../../data/def/battle/sopenweekbosspanel';

export default async function(socket:any) { 

    socket.send( CmdID.battle.sopenweekbosspanel ,
        SOpenWeekBossPanel.Marshal({
            rankId: 0,
            bosses: {
                id: 0,
                status: 0,
                passTime: 0n,
                rank: 0,
                awardTotalNum: 0,
                awardGot: [],
                times: 0,
                victoryTimes: 0
            }
        })
      );

}