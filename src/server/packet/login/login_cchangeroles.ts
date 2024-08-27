import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';
import UpdateLineup from '../../../data/common/Lineup/UpdateLineup';
import CChangeRoles from '../../../data/def/login/cchangeroles';
import SChangeRoles from '../../../data/def/login/schangeroles';

export default async function(socket:any, rawData:Buffer) {     
    const User = new UserData(socket.userData);
    const client_message= CChangeRoles.Unmarshal(rawData);

    await UpdateLineup(socket,client_message.lineupId,client_message.station,client_message.roleId);

    const lineupRoles=User.PlayerInfo.Lineups.find(data=>data.id==client_message.lineupId);

    socket.send(CmdID.login.schangeroles,
        SChangeRoles.Marshal(
            {
                lineupId:client_message.lineupId,
                roles:lineupRoles.roles,
                power:lineupRoles.power,
            }
        )
    );
};

