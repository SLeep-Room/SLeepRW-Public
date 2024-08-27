import { CmdID } from '../../../data/CmdID';
import SActiveBanners from '../../../data/def/activity/sactivebanners';

export default async function(socket:any) { 
    socket.send(CmdID.activity.sactivebanners, SActiveBanners.Marshal({
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