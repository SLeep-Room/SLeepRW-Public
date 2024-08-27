import { CmdID } from '../../../data/CmdID';
import CDailyTaskForAccept from '../../../data/def/task/cdailytaskforaccept';
import SDailyTaskForAccept from '../../../server/import/task/sdailytaskforaccept';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CDailyTaskForAccept.Unmarshal(rawData);

    await SDailyTaskForAccept(socket);
};

