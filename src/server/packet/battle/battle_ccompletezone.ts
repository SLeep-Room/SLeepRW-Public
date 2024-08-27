import { CmdID } from '../../../data/CmdID';

import CCompleteZone from '../../../data/def/battle/ccompletezone';
import SCompleteZone from '../../../data/def/battle/scompletezone';
import SEnterDungeon from '../../../server/import/battle/senterdungeon';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CCompleteZone.Unmarshal(rawData);
    
    socket.send(CmdID.battle.scompletezone,
        SCompleteZone.Marshal({
            zoneId:client_message.floorId,
            currentZone:client_message.outPoint,
            money:[],
            firstPassAward:[],
            exploreAwards:[],
            topMessage:{
                messageId:1,
                parameters:[]
            },
        })
    );

    await SEnterDungeon(socket, 30001);
};

