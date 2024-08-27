import { CmdID } from '../../../data/CmdID';
import Heart from '../../../data/def/common/heart';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= Heart.Unmarshal(rawData);
    
    socket.send(CmdID.common.heart,
        Heart.Marshal({})
    );
};

