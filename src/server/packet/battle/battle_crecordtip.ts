import CRecordTip from '../../../data/def/battle/crecordtip';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CRecordTip.Unmarshal(rawData);
    
    //console.log(client_message)
};

