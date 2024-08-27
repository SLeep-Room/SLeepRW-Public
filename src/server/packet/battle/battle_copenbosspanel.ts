import { CmdID } from '../../../data/CmdID';

import COpenBossPanel from '../../../data/def/battle/copenbosspanel';
import SOpenBossPanel from '../../../server/import/battle/sopenbosspanel';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= COpenBossPanel.Unmarshal(rawData);
    //console.log(client_message)

    await SOpenBossPanel(socket);
};

