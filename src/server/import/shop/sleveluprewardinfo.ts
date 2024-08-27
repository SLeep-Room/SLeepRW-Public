import { CmdID } from '../../../data/CmdID';

import SLevelUpRewardInfo from '../../../data/def/shop/sleveluprewardinfo';

export default async function(socket:any) { 

    socket.send(CmdID.shop.sleveluprewardinfo,
        SLevelUpRewardInfo.Marshal({
            unlock: 0,
            goodId: 0,
            chargeNum: 0,
            ids: []
        })
    )
};

