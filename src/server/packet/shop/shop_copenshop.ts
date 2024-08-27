import { CmdID } from '../../../data/CmdID';

import COpenShop from '../../../data/def/shop/copenshop';
import SOpenShop from '../../../data/def/shop/sopenshop';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= COpenShop.Unmarshal(rawData);
    
    socket.send(CmdID.shop.sopenshop,
        SOpenShop.Marshal({
            shopInfo: [{
                shopId : 0,
                shopType : 0,
                moneyType : "",
                openType : 0,
                openTime : 0n,
                closeTime : 0n,
                closeTimeShow : 0n,
            }]
        })
    );
};

