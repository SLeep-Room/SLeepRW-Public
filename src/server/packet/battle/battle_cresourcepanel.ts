import { CmdID } from '../../../data/CmdID';

import CResourcePanel from '../../../data/def/battle/cresourcepanel';
import SResourcePanel from '../../../server/import/battle/sresourcepanel';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CResourcePanel.Unmarshal(rawData);
    //console.log(client_message)
    await SResourcePanel(socket);
};

