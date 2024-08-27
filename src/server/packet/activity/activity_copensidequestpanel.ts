import { CmdID } from '../../../data/CmdID';
import COpenSideQuestPanel from '../../../data/def/activity/copensidequestpanel';
import SOpenSideQuestPanel from '../../../server/import/activity/sopensidequestpanel';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= COpenSideQuestPanel.Unmarshal(rawData);
    //console.log(client_message)

    await SOpenSideQuestPanel(socket);
};

