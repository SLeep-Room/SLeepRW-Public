import Role from '../../../data/bean/login/role';
import UserInfo from '../../../data/bean/user/userinfo';
import SLineupInfo from '../../../data/def/login/slineupinfo';
import SEnter from '../../../data/def/user/senter';
import SSendAssistRoles from '../../../data/def/chat/ssendassistroles';
import SSendMailList from '../../../data/def/mail/ssendmaillist';

interface AccountData {
    account:string;
    userid: bigint;
    token: string;
    needActive: boolean;
    online: boolean;
    lastLogoutTime: bigint;
    lastOnLineTime: bigint;
    UserInfo: typeof UserInfo.DefaultData;
    LineupList: typeof SLineupInfo.DefaultData.lineupList;
    DungeonInfo: {
      id: number;
      lineupId: number;
      point: {
          x: number;
          y: number;
          dir: number;
      };
      lastbattleid: number;
      battleresult: number;
    };
    Roles: typeof Role.DefaultData[];
    Bags: typeof SEnter.DefaultData.bags;
    Friends:{
        userId:bigint;
        identity:number;
        friendTime:bigint,
        likeStatus:number,
        sparkStatus:number,
        message:{
          msg : string,
          hyperlinks : {
            userId : bigint,
            linkType : number,
            linkText : number,
          }[],
          time : bigint,
        }[],
    }[];
    AssetsRoles:typeof SSendAssistRoles.DefaultData;
    HeadInfo:{//头像数据 SHeadInfo数据包
      avatars : [number,number][],//角色头像
	    frames : [number,number][],//头像框
    },
    Mails:typeof SSendMailList.DefaultData.mails,
    ActivityInfo:{//活动数据
      undrchallengeRecord:{
        finishTime:bigint,
        score: number,
        time: bigint,
        roleIdList: number[],
        roleLvList: number[],
        roleBreakList: number[],
        roleSkinList: number[],
        runeLevelList: number[],
      }[],//未定之路的挑战记录
    },

}

export default AccountData