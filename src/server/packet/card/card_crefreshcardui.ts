import { CmdID } from '../../../data/CmdID';

import CRefreshCardUI from '../../../data/def/card/crefreshcardui';
import SRefreshCardUI from '../../../server/import/card/srefreshcardui';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CRefreshCardUI.Unmarshal(rawData);
    await SRefreshCardUI(socket); 
};

