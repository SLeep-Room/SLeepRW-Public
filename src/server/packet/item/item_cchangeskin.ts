import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';
import CRoleSkin from '../../../data/excel/role/croleskin.json'
import CChangeSkin from '../../../data/def/item/cchangeskin';
import SChangeSkin from '../../../data/def/item/schangeskin';
import Role from '../../../data/bean/login/role';

export default async function(socket:any, rawData:Buffer) { 
    const User = new UserData(socket.userData);
    const client_message= CChangeSkin.Unmarshal(rawData);

    socket.send( CmdID.item.schangeskin ,
        SChangeSkin.Marshal({
            roleId : client_message.roleId,
	        skin2Change : client_message.skin2Change,
      })
    );

    const RoleIndex=User.PlayerInfo.Roles.findIndex(data=>data.id===client_message.roleId);
    User.PlayerInfo.Roles[RoleIndex].skin=client_message.skin2Change;

    socket.userData=User;
};

