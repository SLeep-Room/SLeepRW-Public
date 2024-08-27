import { CmdID } from '../../../data/CmdID';

import COpenTrain from '../../../data/def/activity/copentrain';
import SOpenTrain from '../../../data/def/activity/sopentrain';
import CWeidingBattleConfig from '../../../data/excel/dungeonselect/cweidingbattleconfig.json';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= COpenTrain.Unmarshal(rawData);
    //console.log(client_message)

    socket.send( CmdID.activity.sopentrain ,
        SOpenTrain.Marshal({
            trainsInfo: [{
                battleId: 6349,
                score: 0,
                battleTimes: 0
            }]
        })
    );
};

