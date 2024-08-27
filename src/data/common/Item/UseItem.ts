import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';
import SReqCoinNum from '../../../server/import/item/sreqcoinnum';
import BagTypes from '../../../data/bean/item/beans/bagtypes';
import CItemClassToLoad from '../../../data/excel/item/citemclasstoload.json';
import CItemAttr from '../../../data/excel/item/citemattr.json';

import SModifyItemNum from '../../def/item/smodifyitemnum';

const ItemEnum = {
    BASEITEM: 1,//道具
    EQUIP: 2,//装备
    SKILL: 3,//技能
    CONSUMAABLE: 4,//可消费
}

const AddItemTypeEnum={
    "货币":ItemEnum.BASEITEM,
    "表情包":ItemEnum.BASEITEM,
    "头像":ItemEnum.BASEITEM,
    "普通物品":ItemEnum.BASEITEM,
    "地宫物品":ItemEnum.BASEITEM,
    "任务物品":ItemEnum.BASEITEM,
    "礼包":ItemEnum.BASEITEM,
    "人偶":ItemEnum.BASEITEM,
    "专属装备":ItemEnum.EQUIP,
    "武器":ItemEnum.EQUIP,
    "饰品":ItemEnum.EQUIP,
    "防具":ItemEnum.EQUIP,
    "梦境碎片":ItemEnum.BASEITEM,
    "头像框":ItemEnum.BASEITEM,
    "家具":ItemEnum.BASEITEM,
    "好感度道具":ItemEnum.BASEITEM,
    "魔力结晶":ItemEnum.BASEITEM,
    "外观":ItemEnum.BASEITEM,
    "技能":ItemEnum.SKILL,
};

const AddBagTypeEnum={
    "货币":BagTypes.VALUABLEBAG,
    "表情包":BagTypes.BAG,
    "头像":BagTypes.BAG,
    "普通物品":BagTypes.BAG,
    "地宫物品":BagTypes.BAG,
    "任务物品":BagTypes.VALUABLEBAG,
    "礼包":BagTypes.VALUABLEBAG,
    "人偶":BagTypes.VALUABLEBAG,
    "专属装备":BagTypes.EQUIPBAG,
    "武器":BagTypes.EQUIPBAG,
    "饰品":BagTypes.EQUIPBAG,
    "防具":BagTypes.EQUIPBAG,
    "梦境碎片":BagTypes.VALUABLEBAG,
    "头像框":BagTypes.BAG,
    "家具":BagTypes.FURNITURE_BAG,
    "好感度道具":BagTypes.VALUABLEBAG,
    "魔力结晶":BagTypes.VALUABLEBAG,
    "外观":BagTypes.BAG,
    "技能":BagTypes.BAG,
}

export default async function (socket:any,itemID:number,itemNum:number) {
    const User = new UserData(socket.userData);

    const ItemData=Object.values(CItemAttr.Data);
    const ItemType=Object.values(CItemClassToLoad.Data);
    const AddItem = ItemData.find(item=>item.id===itemID).itemtypeid;
    const AddItemType = ItemType.find(item=>item.id===AddItem).name;
    const BagType=AddBagTypeEnum[AddItemType];

    User.PlayerInfo.Bags.forEach(([bagtype, bag]) => {
        if(bagtype===BagType){
            const ModifyItem=bag.items.find(item=>item.id===itemID);
            if(ModifyItem){
                ModifyItem.number=ModifyItem.number-itemNum;
                socket.send(CmdID.item.smodifyitemnum,
                    SModifyItemNum.Marshal({
                        bagType : bagtype,
                        itemKey : ModifyItem.key,
                        itemNum : ModifyItem.number,
                        delTime : [],
                    })
                );
                
            }
        }
    });
    
    await SReqCoinNum(socket);

    socket.userData=User;
}