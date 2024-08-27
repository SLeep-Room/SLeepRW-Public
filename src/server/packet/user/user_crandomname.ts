import { CmdID } from '../../../data/CmdID';
import CRandomName from '../../../data/def/user/crandomname';
import SRandomName from '../../../data/def/user/srandomname';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CRandomName.Unmarshal(rawData);

    socket.send(CmdID.user.srandomname,
        SRandomName.Marshal(
            {
                name:"请输入你的名称"
            }
        )
    );
};

