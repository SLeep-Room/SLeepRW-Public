import { CmdID } from '../../../data/CmdID';

import SRefreshSkinCollectTask from '../../../data/def/item/srefreshskincollecttask';

export default async function(socket:any) { 

    socket.send(CmdID.item.srefreshskincollecttask,
        SRefreshSkinCollectTask.Marshal({
            tasks: []
        })
    )
};

