import { CmdID } from '../../../data/CmdID';
import clientpool from '../../../index';
import { UserData } from '../../../db/UserData';

import CUndrChallengeRanking from '../../../data/def/ranking/cundrchallengeranking';
import SUndrChallengeRanking from '../../../data/def/ranking/sundrchallengeranking';

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

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CUndrChallengeRanking.Unmarshal(rawData);
    const User = new UserData(socket.userData);
    
    const ranking:typeof SUndrChallengeRanking.DefaultData.ranking=[];
    const AccountPool:UserData[] = Object.values(clientpool.AccountData);
    //console.log(AccountPool)
    AccountPool.forEach(OtherUserData=>{
  
        if(OtherUserData.ActivityInfo.undrChallengeLogs.length > 0){
            const Record = sortRecords(OtherUserData.ActivityInfo.undrChallengeLogs)[0];
            const Ranking = {
                rank: 0,
                undrPanelData: {
                    passTime: Record.time,
                    power: 0,
                    score: Record.score,
                    roleIdList: Record.roleIdList,
                    roleLvList: Record.roleLvList,
                    roleBreakList: Record.roleBreakList,
                    roleSkinList: Record.roleSkinList,
                    runeLevelList: Record.runeLevelList,
                },
                baseUserData: {
                    userId: OtherUserData.AccountInfo.userid,
                    userName: OtherUserData.PlayerInfo.UserInfo.username,
                    avatarId: OtherUserData.PlayerInfo.UserInfo.avatarId,
                    frameId: OtherUserData.PlayerInfo.UserInfo.frameId,
                    userLv: OtherUserData.PlayerInfo.UserInfo.userlevel,
                    showBadges: [],
                    spiritvip: 0,
                    iplocaladdr: ''
                }
            };
            ranking.push(Ranking);
        }
    });

    ranking.sort((a, b) => {
        // 首先根据score降序排序
        if (a.undrPanelData.score > b.undrPanelData.score) return -1;
        if (a.undrPanelData.score < b.undrPanelData.score) return 1;

        if (a.undrPanelData.passTime > b.undrPanelData.passTime) return 1;
        if (a.undrPanelData.passTime < b.undrPanelData.passTime) return -1;
        // 如果score相同，根据time升序排序（时间越少排名越高）
        return 0;
    });

    ranking.forEach((item, index) => {
        item.rank = index + 1;
    })

    const UserRecord = ranking.find(data=>BigInt(data.baseUserData.userId)===BigInt(User.PlayerInfo.UserInfo.userid));

    const personRank={
        rank:0,
        UndrPanelData:{
            passTime: 0n,
            power: 0,
            score: 0,
            roleIdList: [],
            roleLvList: [],
            roleBreakList: [],
            roleSkinList: [],
            runeLevelList: [],
        },
        baseUserData: {
            userId: User.PlayerInfo.UserInfo.userid,
            userName: User.PlayerInfo.UserInfo.username,
            avatarId: User.PlayerInfo.UserInfo.avatarId,
            frameId: User.PlayerInfo.UserInfo.frameId,
            userLv: User.PlayerInfo.UserInfo.userlevel,
            showBadges: [],
            spiritvip: 0,
            iplocaladdr: ''
        }
    };

    if(UserRecord){
        personRank.UndrPanelData.passTime= UserRecord.undrPanelData.passTime;
        personRank.UndrPanelData.power=UserRecord.undrPanelData.power;
        personRank.UndrPanelData.score= UserRecord.undrPanelData.score;
        personRank.UndrPanelData.roleIdList= UserRecord.undrPanelData.roleIdList;
        personRank.UndrPanelData.roleLvList= UserRecord.undrPanelData.roleLvList;
        personRank.UndrPanelData.roleBreakList= UserRecord.undrPanelData.roleBreakList;
        personRank.UndrPanelData.roleSkinList= UserRecord.undrPanelData.roleSkinList;
        personRank.UndrPanelData.runeLevelList= UserRecord.undrPanelData.runeLevelList;
        personRank.rank=UserRecord.rank;
    }

    socket.send( CmdID.ranking.sundrchallengeranking ,
        SUndrChallengeRanking.Marshal({
            seasonId: client_message.seasonId,
            day: client_message.day,
            personRank: {//个人
                rank: personRank.rank,
                undrPanelData: personRank.UndrPanelData,
                baseUserData: personRank.baseUserData,
            },
            ranking: ranking//排行榜
        })
    );
};

