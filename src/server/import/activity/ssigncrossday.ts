import { CmdID } from '../../../data/CmdID';
import SSignCrossDay from '../../../data/def/activity/ssigncrossday';

export default async function(socket:any) { 
    socket.send( CmdID.activity.ssigncrossday ,
        SSignCrossDay.Marshal({
            activityId : 8004,
      })
    );
}