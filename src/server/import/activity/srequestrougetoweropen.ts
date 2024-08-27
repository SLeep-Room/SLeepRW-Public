import { CmdID } from '../../../data/CmdID';
import SRequestRougeTowerOpen from '../../../data/def/activity/srequestrougetoweropen';

export default async function(socket:any) { 
    socket.send( CmdID.activity.srequestrougetoweropen ,
        SRequestRougeTowerOpen.Marshal({
            openornot : 1,
            leftTime : 99999999999n,  
      })
    );
}