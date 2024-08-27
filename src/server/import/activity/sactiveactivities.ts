import { CmdID } from '../../../data/CmdID';
import SActiveActivities from '../../../data/def/activity/sactiveactivities';

export default async function(socket:any) { 
    socket.send(CmdID.activity.sactiveactivities, SActiveActivities.Marshal({
        activities : [
            [48,{
                id : 48,
                leftActiveTime : 6187996329n,
                ifJumpActive : 1,
                leftStartTime : 0n,
            }],
            [80042,{
                id : 80042,
                leftActiveTime : 6187996329n,
                ifJumpActive : 1,
                leftStartTime : 0n,
            }],
            [174,{
                id : 174,
                leftActiveTime : 6187996329n,
                ifJumpActive : 1,
                leftStartTime : 0n,
            }],
            [4,{
                id : 4,
                leftActiveTime : 6187996329n,
                ifJumpActive : 1,
                leftStartTime : 0n,
            }],
            [80045,{
                id : 80045,
                leftActiveTime : 6187996329n,
                ifJumpActive : 1,
                leftStartTime : 0n,
            }],
            [142,{
                id : 142,
                leftActiveTime : 6187996329n,
                ifJumpActive : 1,
                leftStartTime : 0n,
            }],
            [173,{
                id : 173,
                leftActiveTime : 6187996329n,
                ifJumpActive : 1,
                leftStartTime : 0n,
            }],
    ],
    }))
}