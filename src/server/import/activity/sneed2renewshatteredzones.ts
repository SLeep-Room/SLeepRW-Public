import { CmdID } from '../../../data/CmdID';

import SNeed2RenewShatteredZones from '../../../data/def/activity/sneed2renewshatteredzones';

export default async function(socket:any) { 

    socket.send(CmdID.activity.sneed2renewshatteredzones,
        SNeed2RenewShatteredZones.Marshal({
        })
    )
};

