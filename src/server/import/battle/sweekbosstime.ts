import { CmdID } from '../../../data/CmdID';

import SWeekBosstime from '../../../data/def/battle/sweekbosstime';

export default async function(socket:any) { 

    socket.send( CmdID.battle.sweekbosstime ,
        SWeekBosstime.Marshal({
            leftTime: 0n,
            resetTime: 0n,
            nightmareTime: 0n
        })
      );

}