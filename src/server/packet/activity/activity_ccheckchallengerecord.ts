import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';

import CCheckChallengeRecord from '../../../data/def/activity/ccheckchallengerecord';
import SCheckChallengeRecord from '../../../data/def/activity/scheckchallengerecord';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CCheckChallengeRecord.Unmarshal(rawData);
    const User = new UserData(socket.userData);

    const record=[];
    User.ActivityInfo.undrChallengeLogs.forEach((data, index)=>{
        record.push([index,{
            score: data.score,
            time: data.finishTime,
            roleIdList: data.roleIdList,
            roleLvList: data.roleLvList,
            roleBreakList: data.roleBreakList,
            roleSkinList: data.roleSkinList,
            runeLevelList: data.runeLevelList
        }])
    })

    socket.send( CmdID.activity.scheckchallengerecord ,
        SCheckChallengeRecord.Marshal({
            battleType: client_message.battleType,
            record: record
        })
    );

};

