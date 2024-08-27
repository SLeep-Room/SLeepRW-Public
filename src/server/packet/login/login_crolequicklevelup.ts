import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';
import RoleConfig from '../../../data/excel/role/roleconfig.json'
import CRoleBreakCfg from '../../../data/excel/role/crolebreakcfg.json'
import UpRoleExp from '../../../data/common/Role/UpRoleExp';
import UseItem from '../../../data/common/Item/UseItem';
import CRoleQuickLevelUp from '../../../data/def/login/crolequicklevelup';
import SRoleQuickLevelUp from '../../../data/def/login/srolequicklevelup';
import SRoleUpdateLv from '../../../data/def/login/sroleupdatelv';
import CRoleLevelCfg from '../../../data/excel/role/crolelevelcfg.json'
import SCancelLoading from '../../../data/def/notify/scancelloading'
import SRoleUpdateBreakLv from '../../../data/def/login/sroleupdatebreaklv';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CRoleQuickLevelUp.Unmarshal(rawData);
    const User = new UserData(socket.userData);

    const role= User.PlayerInfo.Roles.find(data=>data.id==client_message.roleId);
    const BeforeData=Object.assign({},role);

    const RoleCfg=Object.values(RoleConfig.Data).find(data=>data.id===client_message.roleId);
    const totalExp = calculateRequiredExp(role.lv,client_message.level,RoleCfg.rarity)

    function calculateRequiredExp(currentLevel:number, targetLevel:number, rarity:number) {
        let totalExp = 0;
        let level = currentLevel;
        while (level < targetLevel) {
            const LevelData=CRoleLevelCfg.Data.find(data=>data.id===level)
            const levelUpConditions = {
                5: LevelData.EXexp,
                4: LevelData.URexp,
                3: LevelData.SSRexp,
                2: LevelData.SRexp,
                1: LevelData.Rexp
            };
            const requiredExp = levelUpConditions[rarity];
            totalExp += requiredExp;
            level++;
        }
        return totalExp;
    }

    await UseItem(socket,35002,totalExp);
    await UpRoleExp(socket,client_message.roleId,totalExp);

    let BreakCfg= Object.values(CRoleBreakCfg.Data).find(data=>
        data.breakType==RoleCfg.breakType &&
        data.breaklv==role.breakLv
     );


     if(client_message.level>BreakCfg.levelmax){
        BreakCfg.itemId.forEach(async (itemId,index) => {
            if(itemId!=0){
                await UseItem(socket,itemId,BreakCfg.itemNum[index])
            }
        });
        role.breakLv+=1;
        await UpRoleExp(socket,client_message.roleId,1);
    }

    
     
    socket.send(CmdID.login.srolequicklevelup,
        SRoleQuickLevelUp.Marshal({
            roleId : client_message.roleId,
            beforePro : BeforeData.properties,
            afterPro : role.properties,
            beforeLevel : BeforeData.lv,
            afterLevel : role.lv,
            gainSkin : BreakCfg.skinID,
        })
    );

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
            protocolType:CmdID.login.crolequicklevelup,
        })
    );

    socket.userData=User;
};