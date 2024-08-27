import { CmdID } from '../../../data/CmdID';
import SCancelLoading from '../../../data/def/notify/scancelloading'
import UpdateLineup from '../../../data/common/Lineup/UpdateLineup';

import CDrawCard from '../../../data/def/card/cdrawcard';
import SDrawCard from '../../../data/def/card/sdrawcard';

export default async function(socket:any, rawData:Buffer) { 
    
    const client_message= CDrawCard.Unmarshal(rawData);
    console.log(client_message)
    const CardType = {
        ITEM: 1,
        ROLE: 2,
    }
    socket.send(CmdID.card.sdrawcard,
        SDrawCard.Marshal(
            {
                cards:[
                    {
                        cardtype: CardType.ROLE,
                        cardId: 76,
                        item:{
                            gain:0,//是否为服务器专属装备?
                            id:0,//物品id
                            itemtype:0,//物品类型
                            bagtype:0,
                            number:0,
                            delTime:[]
                        },
                        isNew:1,
                    },
                ],
                items : [],
                baodiNum : 0,
                drawCardType : client_message.drawType,
                share : 0,
                curDayTimes : 0,
            }
        )
    );

    socket.send(CmdID.notify.scancelloading,
        SCancelLoading.Marshal({
            protocolType:CmdID.card.cdrawcard,
        })
    );
};

