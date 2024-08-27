import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';

import RoleConfig from '../../../data/excel/role/roleconfig.json'
import CRoleBreakCfg from '../../../data/excel/role/crolebreakcfg.json'
import CRoleLevelCfg from '../../../data/excel/role/crolelevelcfg.json'

import BuildProperties from '../../../data/common/Role/BuildProperties';

import SRoleUpdateLv from '../../../data/def/login/sroleupdatelv';
import SRoleUpdateProperties from '../../../data/def/login/sroleupdateproperties';
import SRoleBaseProperties from '../../../data/def/login/srolebaseproperties';


export default async function(socket:any, roleid:number,exp: any) { 
    const User = new UserData(socket.userData);

    const upRoleIndex=User.PlayerInfo.Roles.findIndex(role => role.id === roleid);
    const upRole=User.PlayerInfo.Roles[upRoleIndex];
    
    const roleData=Object.values(RoleConfig.Data).find(data=>data.id===roleid);
    
    const BreakData = Object.values(CRoleBreakCfg.Data).find(data =>
        data.breaklv === upRole.breakLv &&
        data.breakType === roleData.breakType
    );

    let newexp=BigInt(upRole.exp)+BigInt(exp);

    function UpRoleLevel() {
        while (newexp > 0 && BreakData.levelmax > upRole.lv) {
            const LevelData=CRoleLevelCfg.Data.find(data=>data.id===upRole.lv)
            const levelUpConditions = {
                5: LevelData.EXexp,
                4: LevelData.URexp,
                3: LevelData.SSRexp,
                2: LevelData.SRexp,
                1: LevelData.Rexp
            };
            const requiredExp = levelUpConditions[roleData.rarity];

            if (BreakData.levelmax == upRole.lv) {
                break;
            }else{
                if (newexp >= requiredExp) {
                    upRole.lv += 1;
                    newexp -= BigInt(requiredExp);
                } else {
                    break;
                }
            }
        }

        const {nowProperties, nextLvProperties} = BuildProperties(roleData,upRole);

        upRole.exp=newexp;
        upRole.properties=nowProperties;
        upRole.curLvBasePro=nowProperties;
        upRole.nextLvBasePro=nextLvProperties;

        //console.log("角色:",roleid,"经验增加成功,当前经验:",upRole.exp,"当前等级:",upRole.lv,"当前属性:",upRole.curLvBasePro,"下一等级属性:",upRole.nextLvBasePro);
    }
    UpRoleLevel();

    socket.send(CmdID.login.sroleupdatelv,
        SRoleUpdateLv.Marshal({
            roleId:roleid,
            level:upRole.lv,
            exp:upRole.exp,
        })
    );

    socket.send(CmdID.login.srolebaseproperties,
        SRoleBaseProperties.Marshal({
            roleId:roleid,
            curLvBasePro : upRole.properties,
            nextLvBasePro :upRole.nextLvBasePro,
            breakLvRange : [],//突破等级范围
            addPercent : [],//加成百分比
        })
    );

    socket.send(CmdID.login.sroleupdateproperties,
        SRoleUpdateProperties.Marshal({
            roleId:roleid,
            properties:upRole.properties,
        })
    );

    socket.userData=User;
}