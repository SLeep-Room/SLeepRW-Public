import { CmdID } from '../../../data/CmdID';

import SOfflinesweepInfo from '../../../data/def/battle/sofflinesweepinfo';

export default async function(socket:any) { 

    socket.send( CmdID.battle.sofflinesweepinfo ,
        SOfflinesweepInfo.Marshal({
            status: 0,
            battleType: 0,
            id: 0,
            leftTime: 0n,
            totalNum: 0,
            leftNum: 0,
            receivedNum: 0
        })
      );

}