import { CmdID } from '../../../data/CmdID';
import UpdateLineup from '../../../data/common/Lineup/UpdateLineup';

import CUpdateUISortType from '../../../data/def/login/cupdateuisorttype';
import SUpdateUISortType from '../../../data/def/login/supdateuisorttype';

export default async function(socket:any, rawData:Buffer) { 

    const CUpdateUISortTypeEnum = {
        ALL_ROLES: 1,
        EQUIPMENT_LIST: 2,
        SUPPORT_ROLE: 3,
        ROLE4SHOW: 4,
        QUICKSET_LINEUP: 5,
        ROLES_HANDBOOK: 6,
    }

    const client_message= CUpdateUISortType.Unmarshal(rawData);
    console.log(client_message);
    socket.send(CmdID.login.supdateuisorttype,
        SUpdateUISortType.Marshal(
            {
                uiSortTypes:[]
            }
        )
    );
};
