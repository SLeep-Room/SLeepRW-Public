import CRecordLowFrameBattle from '../../../data/def/user/crecordlowframebattle';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CRecordLowFrameBattle.Unmarshal(rawData);

    console.log(client_message)
};

