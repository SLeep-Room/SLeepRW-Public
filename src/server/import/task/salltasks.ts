import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';
import SAllTasks from '../../../data/def/task/salltasks';

export default async function(socket:any) { 
  const User = new UserData(socket.userData);

  const TaskStatus = {
    ABANDON: -2,
    UNACCEPT: -1,
    COMMITED: 1,
    FAILED: 2,
    FINISHED: 3,
    PROCESSING: 4,
    ACCEPTED: 5,
  }

  socket.send( CmdID.task.salltasks ,
    SAllTasks.Marshal(User.PlayerInfo.TaskInfo)
  );
}