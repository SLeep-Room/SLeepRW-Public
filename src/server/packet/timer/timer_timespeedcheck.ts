import { CmdID } from '../../../data/CmdID';
import TimeSpeedCheck from '../../../data/def/timer/timespeedcheck';
import SServerTime from '../../../data/def/timer/sservertime';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= TimeSpeedCheck.Unmarshal(rawData);
    
    socket.send(CmdID.timer.sservertime,
        SServerTime.Marshal({
            time: client_message.serverTime,
        })
    );
};

