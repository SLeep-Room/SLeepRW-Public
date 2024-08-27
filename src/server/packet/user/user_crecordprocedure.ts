import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';

import CRecordProcedure from '../../../data/def/user/crecordprocedure';
import SRecordProcedure from '../../../data/def/user/srecordprocedure';

export default async function(socket:any, rawData:Buffer) { 
    const User = new UserData(socket.userData);
    const client_message= CRecordProcedure.Unmarshal(rawData);

    socket.send( CmdID.user.srecordprocedure ,
        SRecordProcedure.Marshal({
            procedure:client_message.procedure
        })
    );
    
    User.PlayerInfo.UserInfo.procedures.push([client_message.procedure,1]);

    socket.userData = User;
};

