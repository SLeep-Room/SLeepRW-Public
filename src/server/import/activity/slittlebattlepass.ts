import { CmdID } from '../../../data/CmdID';
import SLittleBattlePass from '../../../data/def/activity/slittlebattlepass';

export default async function(socket:any) { 
    socket.send(CmdID.activity.slittlebattlepass, SLittleBattlePass.Marshal({
        actId:1,
        deadline:99999999999999n,
        highUnlocked:1,
        commonCollection:[{
            level:1,
            state:1,
            itemId:1,
            itemNum:1,
        }],
        highCollection:[],
        tasks:[],
        chargeMoneyType:1,
        chargePrice:1,
        level:1,
        chipNum:1,
        needChipNum:1,
        leftTime:99999999999999n,
        weeklyLeftTime:99999999999999n,
    }))
}