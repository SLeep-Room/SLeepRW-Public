import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';
import CRoleBreak from '../../../data/def/login/crolebreak';
import SRoleUpdateBreakLv from '../../../data/def/login/sroleupdatebreaklv';
import UpRoleExp from '../../../data/common/Role/UpRoleExp';
import RoleConfig from '../../../data/excel/role/roleconfig.json'
import CRoleBreakCfg from '../../../data/excel/role/crolebreakcfg.json'
import UseItem from '../../../data/common/Item/UseItem';
import SCancelLoading from '../../../data/def/notify/scancelloading'
import SRoleBaseProperties from '../../../data/def/login/srolebaseproperties';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CRoleBreak.Unmarshal(rawData);
    const User = new UserData(socket.userData);
    
    const RoleCfg = Object.values(RoleConfig.Data).find(data=>data.id==client_message.roleId);
    const Roles = User.PlayerInfo.Roles;
    const role= Roles.find(data=>data.id==client_message.roleId);
    const BreakCfg= Object.values(CRoleBreakCfg.Data).find(data=>
        data.breakType==RoleCfg.breakType &&
        data.breaklv==role.breakLv
     );

    BreakCfg.itemId.forEach(async (itemId,index) => {
        if(itemId!=0){
            await UseItem(socket,itemId,BreakCfg.itemNum[index])
        }
    });
    
    role.breakLv=role.breakLv+1;
    role.exp=BigInt(role.exp)+BigInt(1);

    await UpRoleExp(socket,client_message.roleId,0);

    socket.send(CmdID.login.sroleupdatebreaklv,
        SRoleUpdateBreakLv.Marshal({
            roleId : client_message.roleId,
            breakLv : role.breakLv,
            passiveskill : role.passiveskill,
            gainSkin : BreakCfg.skinID,
            breakType : 1,
        })
    );

    socket.send(CmdID.notify.scancelloading,
        SCancelLoading.Marshal({
            protocolType:CmdID.login.crolebreak,
        })
    );
};
