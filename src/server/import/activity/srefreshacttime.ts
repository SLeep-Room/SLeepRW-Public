import { CmdID } from '../../../data/CmdID';

import SRefreshActTime from '../../../data/def/activity/srefreshacttime';

export default async function(socket:any) { 

    socket.send(CmdID.activity.srefreshacttime,
        SRefreshActTime.Marshal({
            activityId: 0,
            leftTime: 0n
        })
    )
};

