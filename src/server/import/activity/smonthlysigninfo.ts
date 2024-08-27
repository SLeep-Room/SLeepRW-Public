import { CmdID } from '../../../data/CmdID';
import SMonthSignInfo from '../../../data/def/activity/smonthlysigninfo';

export default async function(socket:any) { 
    socket.send( CmdID.activity.smonthlysigninfo ,
        SMonthSignInfo.Marshal({
            month : 0,
            days : 0,
            complementNum : 0,
            receivedAward : [],
            monthDay : [],
      })
    );
}