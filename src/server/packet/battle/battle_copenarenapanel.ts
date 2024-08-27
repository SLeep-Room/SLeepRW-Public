import { CmdID } from '../../../data/CmdID';
import COpenAreaPanel from '../../../data/def/battle/copenarenapanel';
import SOpenAreaPanel from '../../../data/def/battle/sopenarenapanel';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= COpenAreaPanel.Unmarshal(rawData);
    //console.log(client_message)

    socket.send( CmdID.battle.sopenarenapanel ,
        SOpenAreaPanel.Marshal({
            waiting : 0,
            seasonId : 0,
            arenaId : 0,
            camp : 0,
            firstEnter : 1,
            apAddTimes : 0,
            leftTime : 999999999,
      })
    );


};

