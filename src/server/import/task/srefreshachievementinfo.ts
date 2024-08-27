import { CmdID } from '../../../data/CmdID';
import SRefreshAchievementInfo  from '../../../data/def/task/srefreshachievementinfo';
import CAchieveBadgeConfig from '../../../data/excel/mission/cachievebadgeconfig.json';

export default async function(socket:any) { 

    socket.send( CmdID.task.srefreshachievementinfo ,
        SRefreshAchievementInfo.Marshal({
            achievement : {
                level : 1,
                process : 0,
                badges : [
                    [25,BigInt(Date.now())] //徽章ID + 获取时间戳
                ],//徽章
                showBadges : [25],
                unReceiveLevels : [],//未领取的等级
            },
            sendType : 2,
        })
    );

}