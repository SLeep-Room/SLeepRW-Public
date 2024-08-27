import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';
import CRoleSkin from '../../../data/excel/role/croleskin.json'
import CGetRoleskin from '../../../data/def/item/cgetroleskin';
import SGetRoleskin from '../../../data/def/item/sgetroleskin';
import Role from '../../../data/bean/login/role';

export default async function(socket:any, rawData:Buffer) { 
    const User = new UserData(socket.userData);
    const client_message= CGetRoleskin.Unmarshal(rawData);

    function buildSkin(){
        const skins = [];
        
        RoleSkin.skinID.forEach(data=>{
            let SkinStatus = 1;//0:未拥有 1:已拥有
            const Check = User.PlayerInfo.Skins.find(([roleid,skinid])=>
                roleid===client_message.roleId &&
                skinid===data
            );
            if(Check){
                SkinStatus = 1;
            }else if(data.toString().startsWith('9') && data.toString().endsWith('01')){
                SkinStatus = 1;
            }
            
            skins.push([
                data,
                {
                    skinID : data,
                    skinStatus : SkinStatus,
                    isInSelling : 0,
                }
            ]);
        })
        return skins;
    }

    
    const RoleSkin=Object.values(CRoleSkin.Data).find(data=>data.id===client_message.roleId)
    //await SReqSpirit(socket);

    socket.send( CmdID.item.sgetroleskin ,
        SGetRoleskin.Marshal({
            roleId : client_message.roleId,
	        skins : buildSkin()
      })
    );

    
};

