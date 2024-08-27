import { CmdID } from '../../../data/CmdID';
import SRougeTowerOpenOrNot from '../../../data/def/activity/srougetoweropenornot';

export default async function(socket:any) { 
    socket.send(CmdID.activity.srougetoweropenornot, SRougeTowerOpenOrNot.Marshal({
        openornot : 1,
        leftTime : 99999999999n,  
    }))
}