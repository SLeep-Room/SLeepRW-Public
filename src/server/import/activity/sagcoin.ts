import { CmdID } from '../../../data/CmdID';
import SAgCoin from '../../../data/def/activity/sagcoin';

export default async function(socket:any) { 
    socket.send(CmdID.activity.sagcoin, SAgCoin.Marshal({
        actId : 0,
		deadline : 0n,
		highUnlocked : 0,
		commonCollection : [],
		highCollection : [],
		tasks : [],
		refreshDailyTime : 0n,
		chargeMoneyType : 0,
		chargePrice : 0,
		levelPrice : 0,
		level : 0,
		chipNum : 0,
		needChipNum : 0,
		canReceiveMaxAward : 0,
		leftTime : 0n,
		maxTaskNum : 0,
    }))
}