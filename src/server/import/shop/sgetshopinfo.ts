import { CmdID } from '../../../data/CmdID';

import SGetShopInfo from '../../../data/def/shop/sgetshopinfo';

export default async function(socket:any) { 

    socket.send(CmdID.shop.sgetshopinfo,
        SGetShopInfo.Marshal({
            shopId: 0,
            goods: [],
            rmtGoods: []
        })
    )
};

