import { CmdID } from '../../../data/CmdID';
import SOpenSideQuestPanel from '../../../data/def/activity/sopensidequestpanel';

export default async function(socket:any) { 
    socket.send( CmdID.activity.sopensidequestpanel ,
        SOpenSideQuestPanel.Marshal({
            dungeons : [],
        })
    );
}