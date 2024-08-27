import { CmdID } from '../../../data/CmdID';

import SRefreshCardUI from '../../../data/def/card/srefreshcardui';
import SCancelLoading from '../../../data/def/notify/scancelloading';


export default async function(socket:any) { 
    const Pool:typeof SRefreshCardUI.DefaultData.pools=[
        [
            100035,{
                itemid:30076,
                itemnum:1,
                itemidTen:30077,
                itemnumTen:1,
                chargeItemNumTen:1,
                chargeItemIdTen:30077,
                moneyId:35008,//灵魂ID
                moneyNum:100,//灵魂单抽
                moneyIdTen:35008,//灵魂十连ID
                moneyNumTen:1000,//灵魂十连抽
                drawCardDetails:{
                    upRoles:[
                        [1,53]
                    ],
                    ssr:{
                        rate:5000,
                        ids:[]
                    },
                    sr:{
                        rate:3000,
                        ids:[]
                    },
                    r:{
                        rate:1500,
                        ids:[]
                    },
                    ur:{
                        rate:500,
                        ids:[53]
                    },
                },
                baoDiNums:30,//保底数量
                upBaoDiNums:60,//UP保底数量
                display:0,//展示
            }
        ]
    ];

    socket.send(CmdID.card.srefreshcardui,
        SRefreshCardUI.Marshal({
            pools:Pool,
            drawTimes:Math.floor(Date.now()/1000),
            curDayTimes:0,
        })
    )
};

