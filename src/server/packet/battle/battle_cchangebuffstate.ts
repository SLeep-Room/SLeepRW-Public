import { CmdID } from '../../../data/CmdID';
import CChangeBuffState from '../../../data/def/battle/cchangebuffstate';
import SChangeBuffState from '../../../data/def/battle/schangebuffstate';

export default async function(socket:any, rawData:Buffer) { 
    const CChangeBuffStateEnum = {
        GETBUFF: 1,
        LOSEBUFF: 2,
        PRODUCEBUFF: 3,
    }

    const client_message= CChangeBuffState.Unmarshal(rawData);

    socket.send( CmdID.battle.schangebuffstate ,
        SChangeBuffState.Marshal({
            id:client_message.id,
            status:client_message.status,
        })
    );

};

