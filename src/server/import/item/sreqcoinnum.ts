import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';
import SReqCoinNum from '../../../data/def/item/sreqcoinnum';
import AccoundData from '../../../data/common/User/AccountData';
import CItemAttr from '../../../data/excel/item/citemattr.json';

const BagTypes = {
    BAG: 1,
    EQUIPBAG: 4,
    VALUABLEBAG: 5,
    FURNITURE_BAG: 6,
}

export default async function(socket:any) { 
    const User = new UserData(socket.userData);
    const Money = [];
    const ItemAttr = Object.values(CItemAttr.Data);
    User.PlayerInfo.Bags.forEach(([bagtype, bag]) => {
        if(bagtype === BagTypes.VALUABLEBAG){
            bag.items.forEach((item) => {
                const Item = ItemAttr.find(data=>data.id===item.id);
                
                if(Item!=undefined && Item.id>=35001 && Item.id <=35075 &&item.number>=0){
                    if(item.number==null){
                        item.number=0;
                    }
                    Money.push([Item.id, item.number]);
                }

            });
        }
        
    });

    socket.send(CmdID.item.sreqcoinnum, SReqCoinNum.Marshal({
        money : Money,
    }))
}