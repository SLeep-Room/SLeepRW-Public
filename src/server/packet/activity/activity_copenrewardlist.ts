import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';

import COpenRewardList from '../../../data/def/activity/copenrewardlist';
import SOpenRewardList from '../../../data/def/activity/sopenrewardlist';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= COpenRewardList.Unmarshal(rawData);
    const User = new UserData(socket.userData);
    //console.log(client_message)
    let totalScore = 0;

    User.ActivityInfo.undrChallengeLogs.forEach(data=>{
      totalScore+= data.score;
    })
    
    socket.send( CmdID.activity.sopenrewardlist ,
        SOpenRewardList.Marshal({
            // 接收奖励
            receiveAward: [],
            // 最大连续ID
            maxContinueId: 0,
            // 分数
            score: totalScore,
            // 结束时间
            endTime: 9999999999999n
        })
    );
};

