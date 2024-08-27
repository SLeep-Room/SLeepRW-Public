import { CmdID } from '../../../data/CmdID';

import SReceiveItems from '../../../data/def/item/sreceiveitems';
import SAddItem from '../../../data/def/item/sadditem';

import AddItem from '../../../data/common/Item/AddItem';
export default async function(socket:any,itemid:number,num:number) { 
    const BagType = {
        BAG: 1,//包
        EQUIPBAG: 4,//装备
        VALUABLEBAG: 5,//贵重品
        FURNITURE_BAG: 6,//家具
    };

    const ItemType = {
        BASEITEM: 1,
        LOCK: 1,
        EQUIP: 2,
        SKILL: 3,
        CONSUMAABLE: 4,
    };

    const {AddItemInfos,AddItemDatas} = await AddItem(socket,[[itemid,num]]);

    socket.send( CmdID.item.sreceiveitems ,
        SReceiveItems.Marshal({
            itemList:AddItemInfos
        })
    ); 
    socket.send( CmdID.item.sadditem ,
        SAddItem.Marshal({
            bagType:AddItemInfos[0].bagtype,
            data:AddItemDatas
        })
    ); 
}