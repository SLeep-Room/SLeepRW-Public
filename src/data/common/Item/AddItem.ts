import { CmdID } from '../../../data/CmdID';

import CItemClassToLoad from '../../../data/excel/item/citemclasstoload.json';
import CItemAttr from '../../../data/excel/item/citemattr.json';
import BagTypes from '../../../data/bean/item/beans/bagtypes';
import Item from '../../bean/item/beans/item';
import {UserData} from '../../../db/UserData';
import ItemInfo from '../../bean/item/beans/iteminfo';

import SReceiveItems from '../../def/item/sreceiveitems';
import SAddItem from '../../def/item/sadditem';
import SModifyItemNum from '../../def/item/smodifyitemnum';
import SReqCoinNum from '../../../server/import/item/sreqcoinnum';

const ItemEnum = {
    BASEITEM: 1,//道具
    EQUIP: 2,//装备
    SKILL: 3,//技能
    CONSUMAABLE: 4,//可消费
}

export default async function (socket:any,items:[number,number][]) {
    const User = new UserData(socket.userData);
    const AddItemInfos:typeof ItemInfo.DefaultData[]=[];
    const AddItemDatas:typeof Item.DefaultData[]=[];
    
    try {
        const ItemData=Object.values(CItemAttr.Data);
        const ItemType=Object.values(CItemClassToLoad.Data);
    
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
    
        let AddItemNum = 0 ;
    
        
        let BagType=0;
        items.forEach(([itemid,num])=>{
            const AddItem = ItemData.find(item=>item.id===itemid);
            if(AddItem){
                const AddItemType = ItemType.find(item=>item.id===AddItem.itemtypeid).name;
    
                let gain=0;
                
                if("技能"===AddItemType){
                    gain=1;
                }
                BagType=AddBagTypeEnum[AddItemType];
        
                const AddItemInfo:typeof ItemInfo.DefaultData={
                    gain:gain,
                    id:itemid,
                    itemtype:AddItemTypeEnum[AddItemType],
                    bagtype:BagType,
                    number:num,
                    delTime:[],
                }
        
                const AddItemData:typeof Item.DefaultData={
                    id : itemid,
                    itemtype : AddItemTypeEnum[AddItemType],
                    flags : 0,
                    key : itemid,
                    position : 0,
                    number : num,
                    delTime : [],//删除时间
                    extra : { //不是装备就忽略
                        equipType : 0,//--装备类型
                        stage : 0,//--突破等级
                        level : 0,//--强化等级
                        exp : 0,//--当前强化等级的经验
                        power : 0,//--装备评分
                        baseAttr : [],//--基础属性
                        finalAttr : [],//--最终属性
                        randomEntry : [],//--随机词条
                        preRandomEntry : [],
                        skillRandomEntry : {
                            index : 0,
                            randomId : 0,
                            kind : 0,
                            attr : 0,
                            attrValue : 0,
                            skill : 0,
                        },
                        finalAttrRandomEntry : {
                            index : 0,
                            randomId : 0,
                            kind : 0,
                            attr : 0,
                            attrValue : 0,
                            skill : 0,
                        },
                        preFinalAttrRandomEntry : {
                            index : 0,
                            randomId : 0,
                            kind : 0,
                            attr : 0,
                            attrValue : 0,
                            skill : 0,
                        },
                        roleId : 0,//--装备所在的角色KEY 为0表示未装备
                        lock : 0,//--装备是否锁定
                        viewDetails : 0,//0未查看 1已查看
                        range : [],//--属性成长值
                        recommend : 0,//--推荐值
                        luck : 0,
                        nextEnchantCost : 0,
                        enchant : 0,//-- 是否附魔过
                    },
                }
                AddItemInfos.push(AddItemInfo);
                AddItemDatas.push(AddItemData);
        
                
                User.PlayerInfo.Bags.forEach(([bagtype,data])=>{
                    if(bagtype===BagType){
                        const BagItem = data.items.find(data=>data.id===itemid);
                        if(BagItem===undefined){
                            data.items.push(AddItemData);
                            data.capacity+=1;
                            AddItemNum+=1;
                        }else{
                            const Itemindex=data.items.findIndex(data=>data.id===itemid);
                            data.items[Itemindex].number+=num;
                            socket.send(CmdID.item.smodifyitemnum,
                                SModifyItemNum.Marshal({
                                    bagType : BagType,
                                    itemKey : data.items[Itemindex].key,
                                    itemNum : data.items[Itemindex].number,
                                    delTime : [],
                                })
                            );
                        }
                    }
                });
            }
            
        });
        
        socket.send(CmdID.item.sreceiveitems,
            SReceiveItems.Marshal({
                itemList: AddItemInfos,
            })
        );
        if(AddItemNum>0){
            socket.send(CmdID.item.sadditem,
                SAddItem.Marshal({
                    bagType:BagType,
                    data:AddItemDatas,
                })
            );
        }
    } catch (e) {
        console.error(e);
    }
    
    await SReqCoinNum(socket);

    socket.userData=User;
    return {AddItemInfos,AddItemDatas};
}
  