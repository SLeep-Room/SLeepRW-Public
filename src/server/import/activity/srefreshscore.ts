import { CmdID } from '../../../data/CmdID';

import SRefreshScore from '../../../data/def/activity/srefreshscore';

export default async function(socket:any) { 

    socket.send(CmdID.activity.srefreshscore,
        SRefreshScore.Marshal({
            scoreRewards: []
        })
    )
};

