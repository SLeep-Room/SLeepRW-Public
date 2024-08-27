import { CmdID } from '../../../data/CmdID';
import SBpCoinTasks from '../../../data/def/task/sbpcointasks';

export default async function(socket:any) { 
    
    socket.send( CmdID.task.sbpcointasks ,
        SBpCoinTasks.Marshal({
            tasks: []
        })
    );
}