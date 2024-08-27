import { CmdID } from '../../../data/CmdID';

import CRefreshCardUI from '../../../data/def/battle/cupdatefogareal';

export default async function(socket:any, rawData:Buffer) { 
    
    const client_message= CRefreshCardUI.Unmarshal(rawData);

    console.log(client_message);
    //socket.userData.DungeonInfo.points=client_message.points;
    //socket.userData.DungeonInfo.prePoints=client_message.prePoints;
};

