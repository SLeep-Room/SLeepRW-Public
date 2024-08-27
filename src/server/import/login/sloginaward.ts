import TotalSign from '../../../data/bean/login/totalsign';
import { CmdID } from '../../../data/CmdID';
import SLoginAward from '../../../data/def/login/sloginaward';

function buildReceives(itemId, num, days) {
    return Array.from({ length: days }, (_, index) => ({
        itemId: itemId,
        num: num,
        signTimes: index + 1,
    }));
}

export default async function(socket:any) { 
    const receives = buildReceives(31439, 1, 7); // 7天的登录奖励
    const data = {
        awards : receives,
        needReceive : 0,
        totalDay : 0,
        cumulativeDay : 0,
    };

    socket.send( CmdID.login.sloginaward ,
        SLoginAward.Marshal({
            totalSign: data,
        })
    );
}