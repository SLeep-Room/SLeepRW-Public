import { CmdID } from '../../../data/CmdID';

import CChooseSupportRole from '../../../data/def/chat/cchoosesupportrole';
import SChooseSupportRole from '../../../data/def/chat/schoosesupportrole';


export default async function(socket:any, rawData:Buffer) { 
    const client_message= CChooseSupportRole.Unmarshal(rawData);
    
    socket.send(CmdID.chat.schoosesupportrole,
        SChooseSupportRole.Marshal({
            userId: client_message.userId,
        })
    );
}