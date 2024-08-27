import { CmdID } from '../../../data/CmdID';
import SGetFirstRechargeGiftState from '../../../data/def/shop/sgetfirstrechargegiftstate';

export default async function(socket:any) { 
    socket.send(CmdID.shop.sgetfirstrechargegiftstate, SGetFirstRechargeGiftState.Marshal({
        statue : 0,
	    giftsState : [],
    }))
}