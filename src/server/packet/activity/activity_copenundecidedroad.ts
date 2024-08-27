import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';
import COpenUndecidedroad from '../../../data/def/activity/copenundecidedroad';
import SOpenUndecidedroad from '../../../data/def/activity/sopenundecidedroad';
import CWeidingSort from "../../../data/excel/dungeonselect/cweidingsort.json";

export default async function(socket:any, rawData:Buffer) { 
  const User = new UserData(socket.userData);
  //const client_message= COpenUndecidedroad.Unmarshal(rawData);
  function sortRecords(records:any) {
    return records.sort((a:any, b:any) => {
      // 首先根据 score 降序排序
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;
  
      if (a.time > b.time) return 1;
      if (a.time < b.time) return -1;
  
      return 0;
    });
  }

  //console.log(client_message)
  let totalScore = 0;
  const UserRecord:UserData["ActivityInfo"]["undrChallengeLogs"] = sortRecords(User.ActivityInfo.undrChallengeLogs);

  UserRecord.forEach(data=>{
    totalScore=totalScore+data.score;
  })

  const data={
    score:0,
    time:0
  }
  
  if(UserRecord.length>0){
    data.score=UserRecord.find(data=>data.score).score;
    data.time=UserRecord.find(data=>data.score).score;
  }
  
  socket.send( CmdID.activity.sopenundecidedroad ,
      SOpenUndecidedroad.Marshal({
        seasonId: 1, // 赛季ID
        totalScore: parseInt(totalScore.toString()), // 总得分
        leftTime: 999999999999n, // 剩余时间（bigint类型）
        battleIds: [
          [100,6349], // 对战ID
        ], // 对战ID列表
        day: 1, // 日期
        challenge: [[
          1,{
            battleId: 6349,
            score: data.score,
            battleTimes: data.time
          }
        ]] // 挑战列表
      })
  );

  socket.userData=User;
};