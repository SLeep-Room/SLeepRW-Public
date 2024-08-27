import { CmdID } from '../../../data/CmdID';
import SOpenPuzzle from '../../../data/def/activity/sopenpuzzle';

export default async function(socket:any) { 
    socket.send( CmdID.activity.sopenpuzzle ,
        SOpenPuzzle.Marshal({
            actId : 0,
            deadLine : 0n,
            leftTime : 0n,
            puzzleInfo : [],
            puzzleNum : 0,
            progressReward : [],
      })
    );
}