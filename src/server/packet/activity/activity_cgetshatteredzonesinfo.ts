import { CmdID } from '../../../data/CmdID';

import CGetShatteredZonesInfo from '../../../data/def/activity/cgetshatteredzonesinfo';
import SGetShatteredZonesInfo from '../../../data/def/activity/sgetshatteredzonesinfo';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CGetShatteredZonesInfo.Unmarshal(rawData);
    //console.log(client_message)

    socket.send( CmdID.activity.sgetshatteredzonesinfo ,
      SGetShatteredZonesInfo.Marshal({
        zones: [],
        zonesClearReward: [],
        reloadInfoTime: 0n
      })
    );
    
};

