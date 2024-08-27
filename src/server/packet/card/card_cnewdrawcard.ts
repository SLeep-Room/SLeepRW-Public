
import { CmdID } from '../../../data/CmdID';
import CNewDrawCard from '../../../data/def/card/cnewdrawcard';

import SDrawCard from '../../../data/def/card/sdrawcard';

import SCancelLoading from '../../../data/def/notify/scancelloading';
import SReceiveItems from '../../../server/import/item/sreceiveitems';

import CGuideLinkConfig from '../../../data/excel/guide/cguidelinkconfig.json';

import CRoleItem from '../../../data/excel/item/croleitem.json';

import SLineupInfo from '../../../server/import/login/slineupinfo';
import SRoleList from '../../../server/import/login/srolelist';

import AddRole from '../../../data/common/Role/AddRole';
import FinishGuide from '../../../data/common/Guide/FinishGuide';
import GuidTypesEnum from '../../../data/bean/user/guidtypes';

export default async function(socket:any, rawData:Buffer) { 
    
    const client_message= CNewDrawCard.Unmarshal(rawData);

    const CardType = {
        ITEM: 1,
        ROLE: 2,
    }
    const ItemType = {
        BASEITEM: 1,
        LOCK: 1,
        EQUIP: 2,
        SKILL: 3,
        CONSUMAABLE: 4,
    };
    const BagType = {
        BAG: 1,//包
        EQUIPBAG: 4,//装备
        VALUABLEBAG: 5,//贵重品
        FURNITURE_BAG: 6,//家具
    };
    const DrawCardType={
        Role : 1,
        Equip : 2,
    }

    socket.send(CmdID.card.sdrawcard,
        SDrawCard.Marshal({
            cards:[
                {
                    cardtype: CardType.ROLE,
                    cardId: 76,
                    item:{
                        gain:1,//是否为服务器专属装备?
                        id:Object.values(CRoleItem.Data).find(item=>item.roleid==76).id,//物品id
                        itemtype:ItemType.CONSUMAABLE,//物品类型
                        bagtype:BagType.VALUABLEBAG,
                        number:1,
                        delTime:[]
                    },
                    isNew:1,
                },
                {
                    cardtype: CardType.ROLE,
                    cardId: 16,
                    item:{
                        gain:1,//是否为服务器专属装备?
                        id:Object.values(CRoleItem.Data).find(item=>item.roleid==16).id,
                        itemtype:ItemType.CONSUMAABLE,
                        bagtype:BagType.VALUABLEBAG,
                        number:1,
                        delTime:[]
                    },
                    isNew:1,
                },
            ],
            items:[],
            baodiNum:1,
            drawCardType:DrawCardType.Role,
            share:0,
            curDayTimes:Math.floor(Date.now()/1000),
            
        })
    )
    await AddRole(socket,76);
    await AddRole(socket,16);


    await SReceiveItems(socket,35012,2);

    socket.send( CmdID.notify.scancelloading ,
        SCancelLoading.Marshal({
            protocolType:CmdID.card.cnewdrawcard
        })
    );

    await SLineupInfo(socket);
    await SRoleList(socket);
    await FinishGuide(socket,GuidTypesEnum.TEN_DRAW);
    
    /*** 
     socket.send( CmdID.user.srecordguide ,
        new Serializable(SRecordGuide).serialize({
            guide:GuidTypes.NEW_GUIDE_1,
        })
    );
    socket.send( CmdID.user.srecordguide ,
        new Serializable(SRecordGuide).serialize({
            guide:GuidTypes.TEN_DRAW,
        })
    );
    socket.send(CmdID.card.scommongainrole,
        new Serializable(SCommongainRole).serialize({
            roles:[
                {
                    cardtype: CardType.ROLE,
                    cardId: 76,
                    item:{
                        gain:1,
                        id:35012,
                        itemtype:ItemType.CONSUMAABLE,
                        bagtype:BagType.VALUABLEBAG,
                        number:1,
                        delTime:[]
                    },
                    isNew:true,
                },
                {
                    cardtype: CardType.ROLE,
                    cardId: 16,
                    item:{
                        gain:2,
                        id:35012,
                        itemtype:ItemType.CONSUMAABLE,
                        bagtype:BagType.VALUABLEBAG,
                        number:1,
                        delTime:[]
                    },
                    isNew:true,
                }
            ],
            crystals:[],
            items:[],
        })
    );
    */
    

    /***
    // 发送角色信息
    socket.send( CmdID.item.sadditem ,
        new Serializable(SAddItem).serialize({
            bagType:BagType.BAG,
            data:[
                {
                    id:35012,
                    itemtype:ItemType.CONSUMAABLE,
                    flags:1,
                    key:35012,
                    position:1,
                    number:2,
                    delTime:[],
                    extra:{
                        equipType:0,
                        stage:0,
                        level:0,
                        exp:0,
                        power:0,
                        baseAttr:[],
                        finalAttr:[],
                        randomEntry:[],
                        preRandomEntry:[],
                        skillRandomEntry:{
                            index:0,
                            randomId:0,
                            kind:1,
                            attr:0,
                            attrValue:0,
                            skill:0,
                        },
                        finalAttrRandomEntry:{
                            index:0,
                            randomId:0,
                            kind:1,
                            attr:0,
                            attrValue:0,
                            skill:0,
                        },
                        preFinalAttrRandomEntry:{
                            index:0,
                            randomId:0,
                            kind:1,
                            attr:0,
                            attrValue:0,
                            skill:0,
                        },
                        roleId:0,
                        lock:0,
                        viewDetails:0,
                        range:[],
                        recommend:0,
                        luck:0,
                        nextEnchantCost:0,
                        enchant:0,
                    }
                }
            ]
        })
    );
    ***/
    

    
};

