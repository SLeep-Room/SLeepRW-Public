import AccountData from '../../../data/common/User/AccountData';

import CRecordGuide from '../../../data/def/user/crecordguide';
import FinishGuide from '../../../data/common/Guide/FinishGuide';
//import GuidTypesEnum from '../../../data/bean/user/guidtypes';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CRecordGuide.Unmarshal(rawData);

    await FinishGuide(socket,client_message.guide)
};

