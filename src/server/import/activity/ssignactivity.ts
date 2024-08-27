import { CmdID } from '../../../data/CmdID';
import SSignActivity from '../../../data/def/activity/ssignactivity';

export default async function(socket:any) { 
    socket.send( CmdID.activity.ssignactivity ,
        SSignActivity.Marshal({
            actId : 3001,
            deadline : BigInt(4803814800000),
            awards:[
                {itemId : 31038, itemNum : 1, receive : 1},
                {itemId : 30076, itemNum : 5, receive : 1},
                {itemId : 40029, itemNum : 1, receive : 1},
                {itemId : 31038, itemNum : 1, receive : 1},
                {itemId : 31038, itemNum : 2, receive : 1},
                {itemId : 31038, itemNum : 2, receive : 1},
                {itemId : 30077, itemNum : 2, receive : 1}
            ],
            totalSignNum : 121,
      })
    );

    socket.send( CmdID.activity.ssignactivity ,
        SSignActivity.Marshal({
            actId : 7006,
            deadline : BigInt(1926154799000),
            awards:[
                {itemId : 35002, itemNum : 200000, receive : 1},
                {itemId : 35008, itemNum : 200, receive : 1},
                {itemId : 70001, itemNum : 10, receive : 1},
                {itemId : 70002, itemNum : 2, receive : 1},
                {itemId : 31038, itemNum : 1, receive : 1},
                {itemId : 95033, itemNum : 2, receive : 1},
            ],
            totalSignNum : 121,
      })
    );
}