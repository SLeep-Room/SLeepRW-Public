import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';

import CEnter from '../../../data/def/user/center';
import SEnter from '../../../data/def/user/senter';

import SAllTasks from '../../import/task/salltasks';
import SAllUnlockFunc from '../../import/notify/sallunlockfunc';
import SEnterMainCity from '../../import/battle/sentermaincity';
import SLineupInfo from '../../import/login/slineupinfo';
import SRoleList from '../../import/login/srolelist';
import SResSpirit from '../../import/item/sresspirit';

import SLittleBattlePass from '../../import/activity/slittlebattlepass';
import SAgCoin from '../../import/activity/sagcoin';
import SRougeTowerOpenOrNot from '../../import/activity/srougetoweropenornot';
import SRequestRougeTowerOpen from '../../../server/import/activity/srequestrougetoweropen';

import SActiveBanners from '../../import/activity/sactivebanners';
import SActiveActivities from '../../import/activity/sactiveactivities';

import SEnterDungeon from '../../import/battle/senterdungeon';
import SOpenDungeonList from '../../../server/import/battle/sopendungeonlist';
import SResourcePanel from '../../../server/import/battle/sresourcepanel';
import SOpenSideQuestPanel from '../../../server/import/activity/sopensidequestpanel';
import SSendHeadInfo from '../../../server/import/user/ssendheadinfo';
import SSendMailList from '../../../server/import/mail/ssendmaillist';
import SSignCrossDay from '../../../server/import/activity/ssigncrossday';
import SOpenBpPuzzle from '../../../server/import/activity/sopenbppuzzle';
import SSignActivity from '../../../server/import/activity/ssignactivity';
import SMonthlySignInfo from '../../../server/import/activity/smonthlysigninfo';
import SReqCoinNum from '../../../server/import/item/sreqcoinnum';
import SHandbook from '../../../server/import/user/shandbook';
import SGetFirstRechargeGiftState from '../../../server/import/shop/sgetfirstrechargegiftstate';
import SLoginAward from '../../../server/import/login/sloginaward';
import SOpenBossPanel from '../../../server/import/battle/sopenbosspanel';
import SSendAssistRoles from '../../../server/import/chat/ssendassistroles';
import SRefreshFriendInfos from '../../../server/import/chat/srefreshfriendinfos';
import SRefreshAchievementInfo from '../../../server/import/task/srefreshachievementinfo';
import SSendUndecideState from '../../../server/import/activity/ssendundecidedstate';
import SRefreshCardUI from '../../../server/import/card/srefreshcardui';
import SLevelUpRewardInfo from '../../../server/import/shop/sleveluprewardinfo';
import SShareActivity from '../../../server/import/activity/sshareactivity';
import SNeed2RenewShatteredZones from '../../../server/import/activity/sneed2renewshatteredzones';
import SGetShopInfo from '../../../server/import/shop/sgetshopinfo';
import SRefreshScore from '../../../server/import/activity/srefreshscore';
import SRefreshActTime from '../../../server/import/activity/srefreshacttime';
import SEquipEnchantReset from '../../../server/import/item/sequipenchantreset';
import SBpCoinTasks from '../../../server/import/task/sbpcointasks';
import SYardInfo from '../../../server/import/yard/syardinfo';
import SDailyTaskForAccept from '../../../server/import/task/sdailytaskforaccept';
import SOfflineSweepInfo from '../../../server/import/battle/sofflinesweepinfo';
import SGetSkinOverview from '../../../server/import/item/sgetskinoverview';
import SRefreshSkinCollectTask from '../../../server/import/item/srefreshskincollecttask';
import SOpenWeekBossPanel from '../../../server/import/battle/sopenweekbosspanel';
import SWeekBossTime from '../../../server/import/battle/sweekbosstime';


export default async function(socket:any, rawData:Buffer) { 
    const { deepLink }= CEnter.Unmarshal(rawData);
    const User = new UserData(socket.userData);

    if (UserData && User.PlayerInfo.UserInfo) {
        Object.assign(User.PlayerInfo.UserInfo, {
            userlevel: 60,
            online: true,
            lastLogoutTime: 0n,
            lastOnLineTime: BigInt(Date.now())
        });
    }

    socket.send( CmdID.user.senter ,
        SEnter.Marshal({
            userInfo:User.PlayerInfo.UserInfo,
            bags:User.PlayerInfo.Bags,
      })
    );

    //login packet
    await SSendUndecideState(socket);//未定之路状态 
    await SLittleBattlePass(socket);//战斗通行证 未修
    await SAgCoin(socket);//AG币 未修
    await SRefreshCardUI(socket); //未修
    await SRefreshAchievementInfo(socket); //刷新成就信息 未修
    //sshopredpointnotify//商店红点通知
    await SRougeTowerOpenOrNot(socket);//罗德岛之塔是否开放
    await SLevelUpRewardInfo(socket);//等级奖励信息 未修
    await SAllUnlockFunc(socket);//所有解锁功能 未修
    await SActiveBanners(socket)//活动横幅 未修
    await SActiveActivities(socket)//活动列表 未修
    await SShareActivity(socket);//分享活动 未修
    await SRoleList(socket);//角色列表 修复
    await SSendAssistRoles(socket);//发送助战信息 修复
    await SNeed2RenewShatteredZones(socket);//空包 
    await SGetShopInfo(socket);//获取商店信息 未修
    await SSendMailList(socket);//发送邮件列表 修复
    await SRequestRougeTowerOpen(socket);//请求罗德岛之塔开放 修复
    await SSignCrossDay(socket);//签到天数 未修
    await SOpenBpPuzzle(socket);//打开宝箱谜题 未修
    await SLoginAward(socket);//登录奖励 未修
    await SRefreshScore(socket);//刷新分数 未修
    await SRefreshActTime(socket);//刷新活动时间 未修
    //await SMonthlySignInfo(socket);//月签信息 未修
    await SSignActivity(socket);//签到活动 未修
    await SEquipEnchantReset(socket); //装备强化重置 空包
    await SBpCoinTasks(socket); //绑定积分任务响应 未修
    //sshatteredredpoint //破碎红点
    await SLineupInfo(socket);//角色队列列表 修复
    await SResourcePanel(socket);//资源面板 未修
    await SOpenSideQuestPanel(socket);//打开副本任务面板 未修
    await SAllTasks(socket);//所有任务 修复
    await SReqCoinNum(socket);//金币数量 修复
    await SEnterDungeon(socket); //进入场景副本 修复
    await SResSpirit(socket);//资源精力 修复
    await SSendHeadInfo(socket);//发送头像信息 修复
    await SHandbook(socket);//手册 修复
    await SGetFirstRechargeGiftState(socket);//首充礼包状态 未修
    //sshopredpointnotify //商店红点通知 未修
    //sskinredpoints //皮肤红点 未修
    await SYardInfo(socket);//战场信息 未修
    await SDailyTaskForAccept(socket) //接受日常任务 未修
    //supdateuisorttype //更新UI排序类型 未修
    //slightpartyredpoint //小队红点 未修
    await SOfflineSweepInfo(socket) //离线扫荡信息 未修
    //smusiccollectionrewardsachieved //音乐集收益 未修
    await SGetSkinOverview(socket) //获取皮肤概览 未修
    await SRefreshSkinCollectTask(socket) //刷新皮肤收藏任务 未修
    await SOpenWeekBossPanel(socket) //打开周BOSS面板 未修
    await SWeekBossTime(socket) //周BOSS时间 未修
    await SOpenDungeonList(socket);//打开副本列表
    //smainlinereward //主线奖励 未修
    await SRefreshFriendInfos(socket);//刷新好友信息

    await SOpenBossPanel(socket);//打开BOSS面板
};

