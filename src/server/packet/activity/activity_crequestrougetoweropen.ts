import CRequestRougeTowerOpen from '../../../data/def/activity/crequestrougetoweropen';
import SRequestRougeTowerOpen from '../../../server/import/activity/srequestrougetoweropen';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CRequestRougeTowerOpen.Unmarshal(rawData);
    //console.log(client_message)
    await SRequestRougeTowerOpen(socket);
};

