import { CmdID } from '../../../data/CmdID';

import SShareActivity from '../../../data/def/activity/sshareactivity';

export default async function(socket:any) { 

    socket.send(CmdID.activity.sshareactivity,
        SShareActivity.Marshal({
            share: []
        })
    )
};

