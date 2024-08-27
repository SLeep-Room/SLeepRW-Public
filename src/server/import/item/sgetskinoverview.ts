import { CmdID } from '../../../data/CmdID';

import SGetSkinOverview from '../../../data/def/item/sgetskinoverview';

export default async function(socket:any) { 

    socket.send(CmdID.item.sgetskinoverview,
        SGetSkinOverview.Marshal({
            skins: []
        })
    )
};

