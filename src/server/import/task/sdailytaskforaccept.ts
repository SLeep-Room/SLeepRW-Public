import { CmdID } from '../../../data/CmdID';
import CAnniversaryMission from '../../../data/excel/dungeonselect/canniversarymission.json';
import SDailyTaskForAccept from '../../../data/def/task/sdailytaskforaccept';
import CDailyMissionAward from '../../../data/excel/mission/cdailymissionaward.json';

export default async function(socket:any) { 
    const TaskStatusEnum = {
        ABANDON: -2,
        UNACCEPT: -1,
        COMMITED: 1,
        FAILED: 2,
        FINISHED: 3,
        PROCESSING: 4,
        ACCEPTED: 5,
    }
    const MainLineRewardStatusEnum = {
        UNFINISHED: 1,
        AVAILABLE: 2,
        RECEIVED: 3,
    }

    
    socket.send( CmdID.task.sdailytaskforaccept ,
        SDailyTaskForAccept.Marshal({
            // 每日刷新时间
            dailyRefreshTime: 60*60*24,
            // 总刷新次数
            totalRefresh: 0,
            // 激活值数组
            activeValues: [
                [20,0],
                [40,0],
                [60,0],
                [80,0],
                [100,0],
            ],
            // 当前激活值
            currentActiveValue: 0,
            // 每日任务数组
            dailyTasks: [
                {
                    taskid: 30017,
                    taskstatus: TaskStatusEnum.ACCEPTED,
                    conditions: [{
                        conditionIndex: 30017,// 条件索引
                        value: 0,// 条件值
                        destValue: 1,// 目标值
                    }],
                    acceptTime: 0n,
                    visitable: 1,// 可访问次数
                },
                {
                    taskid: 30021,
                    taskstatus: TaskStatusEnum.ACCEPTED,
                    conditions: [{
                        conditionIndex: 30021,// 条件索引
                        value: 0,// 条件值
                        destValue: 1,// 目标值
                    }],
                    acceptTime: 0n,
                    visitable: 1,// 可访问次数
                },
            ]
        })
    );
}