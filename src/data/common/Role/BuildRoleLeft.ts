import {UserData} from '../../../db/UserData';
import RoleConfig from '../../../data/excel/role/roleconfig.json'
import CRoleSkin from '../../../data/excel/role/croleskin.json'
import CRoleBreakCfg from '../../../data/excel/role/crolebreakcfg.json'
import CSkillMap from '../../../data/excel/skill/cskillmap.json'
import CSkillItem from '../../../data/excel/item/cskillitem.json'
import AttrType from '../../../data/bean/login/attrtype';
  
const Fighter = {
    FIGHTER_ROLE: 1,
    FIGHTER_MONSTER: 2,
}

export default function(socket:any, lineupID:number,ismission:boolean=false) {
    const User = new UserData(socket.userData);
    let left = [];
    let Lineup = User.PlayerInfo.Lineups.find(data => data.id === lineupID)

    Lineup.roles.forEach(([key,roleid])=> {
        if(roleid>=1){
            //寻找角色
            const role=User.PlayerInfo.Roles.find(role => role.id === roleid);
            const RoleData= Object.values(RoleConfig.Data).find(role=>role.id===roleid)
                // 计算契约技能
                let contractSkillID = RoleData.contractskillid;
                let assistSkillID = Object.values(CSkillItem.Data).find(data => data.id ===contractSkillID).assistskillID[0].toString();
                const RoleSkill1=assistSkillID.substring(0, assistSkillID.length - 2);
        
                let contractSkillID1 = RoleData.contractskillid2;
                let assistSkillID1 = Object.values(CSkillItem.Data).find(data => data.id ===contractSkillID1).assistskillID[0].toString();
                const RoleSkill2=assistSkillID1.substring(0, assistSkillID1.length - 2);

            if(role){
                if(ismission==true && roleid==1){
                    left.push([key,{
                        fightertype:Fighter.FIGHTER_ROLE,
                        id:role.id,
                        attrs:role.properties,
                        baseSkill:RoleData.attackID,
                        skills:[
                            parseInt(RoleSkill1+'01'),
                            parseInt(RoleSkill2+'01'),
                        ],
                        passiveSkills: [
                            //parseInt(RoleData.contractskillid3.toString()),
                        ], // 被动技能（空数组）
                        deadtype: 1, // 死亡类型（默认为0）
                        hpStrip: "", // 生命条（空字符串）
                        level: role.lv, // 等级（默认为0）
                        evolutionLevel: 0, // 进化等级（默认为0）
                        exclusiveLevel: 0, // 独特等级（默认为0）
                        equipSkills: [], // 装备技能（空数组）
                        skinId: role.skin, // 皮肤ID（默认为0）
                        autoExploreSkill: [], // 自动探索技能（空数组）
                        runeSkill: [], // 符文技能（空数组）
                    }]);
                }else if(ismission==false){
                    left.push([key,{
                        fightertype:Fighter.FIGHTER_ROLE,
                        id:role.id,
                        attrs:role.properties,
                        baseSkill:RoleData.attackID,
                        skills:[
                            parseInt(RoleSkill1+'01'),
                            parseInt(RoleSkill2+'01'),
                        ],
                        passiveSkills: [
                            //parseInt(RoleData.contractskillid3.toString()),
                        ], // 被动技能（空数组）
                        deadtype: 1, // 死亡类型（默认为0）
                        hpStrip: "", // 生命条（空字符串）
                        level: role.lv, // 等级（默认为0）
                        evolutionLevel: 0, // 进化等级（默认为0）
                        exclusiveLevel: 0, // 独特等级（默认为0）
                        equipSkills: [], // 装备技能（空数组）
                        skinId: role.skin, // 皮肤ID（默认为0）
                        autoExploreSkill: [], // 自动探索技能（空数组）
                        runeSkill: [], // 符文技能（空数组）
                    }]);
                }
            }
        }
        
    });
    return left; 
}

