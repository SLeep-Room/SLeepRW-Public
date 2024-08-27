import { CmdID } from '../../../data/CmdID';

import SEquipEnchantReset from '../../../data/def/item/sequipenchantreset';

export default async function(socket:any) { 

    socket.send(CmdID.item.sequipenchantreset,
        SEquipEnchantReset.Marshal({   
        })
    )
};

