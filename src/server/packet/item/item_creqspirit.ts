import { CmdID } from '../../../data/CmdID';

import CReqSpirit from '../../../data/def/item/creqspirit';
import SReqSpirit from '../../../server/import/item/sresspirit';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CReqSpirit.Unmarshal(rawData);
    
    //await SReqSpirit(socket);
};

