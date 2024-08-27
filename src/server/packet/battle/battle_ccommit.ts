import { CmdID } from '../../../data/CmdID';

import CCommit from '../../../data/def/battle/ccommit';
import SCommit from '../../../data/def/battle/scommit';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CCommit.Unmarshal(rawData);
    
    socket.send(CmdID.battle.scommit,
        SCommit.Marshal({
            kind:client_message.kind,
            kindValue:client_message.value
        })
    );
};

