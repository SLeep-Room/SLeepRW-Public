import RoleConfig from '../../../data/excel/role/roleconfig.json'
import CRoleSkin from '../../../data/excel/role/croleskin.json'
import CRoleBreakCfg from '../../../data/excel/role/crolebreakcfg.json'
import CSkillMap from '../../../data/excel/skill/cskillmap.json'
import CSkillType from '../../../data/excel/skill/cskilltype.json'
import CSkillItem from '../../../data/excel/item/cskillitem.json'
import AttrType from '../../../data/bean/login/attrtype';
import {UserData} from '../../../db/UserData';
import Role from '../../../data/bean/login/role';

import BuildProperties from '../../../data/common/Role/BuildProperties'

export default async function(socket:any, roleid:number) { 
    const User = new UserData(socket.userData);
    try{
        if(User.PlayerInfo.Roles.find(role => role.id === roleid)!=undefined){
            console.log("角色已存在",roleid);
            return;
        }

        const roleData=Object.values(RoleConfig.Data).find(data=>data.id===roleid);
        const skinIDList=Object.values(CRoleSkin.Data).find(data=>data.id===roleid).skinID;
        const {baseProperties,nowProperties, nextLvProperties,nextBreakProperties} = BuildProperties(roleData,1, 0);

        let isLeader = 0;
        if(roleid==1){
            isLeader = 1;
        }

        const contractSkillID = roleData.contractskillid;
        const assistSkillID = Object.values(CSkillItem.Data).find(data => data.id ===contractSkillID).assistskillID[0].toString();
        const RoleSkill1=assistSkillID.substring(0, assistSkillID.length - 2);

        const unlockedNode=[];

        const NodeSkill1=Object.values(CSkillMap.Data).find(data=>
            data.skillID==parseInt(RoleSkill1) &&
            data.frontNode=="-1"
        );

        const contractSkillList:typeof Role.DefaultData.contractSkill=[];

        if(NodeSkill1!=undefined){
            unlockedNode.push(NodeSkill1.id);
            const SkillItem = Object.values(CSkillItem.Data).find(data=>data.id===NodeSkill1.skillID);
            contractSkillList.push({
                skillItemId: SkillItem.assistskillID[0],
                skillLevel: SkillItem.assistskillID[0],
                selected:1,
                power:0,
            });
        }

        const RoleDatas:typeof Role.DefaultData={
            isLeader: isLeader, // 是否是主角色，1为是，0为否
            id: roleid, // 角色ID
            birthday: BigInt(Math.floor(Date.now() / 1000)), // 角色获得时间，使用大整数表示
            breakLv: 0, // 突破等级
            lv: 1, // 角色等级
            exp: 0n, // 角色经验，使用大整数表示
            lock: 0, // 角色是否锁定，1为锁定，0为未锁定
            properties: nowProperties, // 角色基础属性集合
            contractSkill: contractSkillList, // 契约技能列表
            passiveskill: [], // 被动技能列表
            equips: [], // 装备集合
            preSetEquips: [], // 预设装备集合
            evolution: 0, // 进化等级
            curLvBasePro: nowProperties, // 当前等级基础属性
            nextLvBasePro: nextLvProperties, // 下一等级基础属性
            breakLvRange: [], // 突破等级范围
            nextEvolutionLvBasePro: nextBreakProperties, // 下一进化等级基础属性
            power: 0, // 力量值
            energy: 0, // 能量值
            redDot: 1, // 新角色标记，1表示新角色，0表示非新角色
            relationLevel: 0, // 关系等级
            skin: skinIDList[0], // 皮肤ID
            goodProgress: 0, // 进度良好标记，通常用于任务或成就
            receiveList: [], // 接收列表，可能用于礼物或奖励
            unlockedNode: unlockedNode, // 已解锁的节点列表，表示角色成长或技能树的解锁情况,
            suitSkills: [], // 套装技能集合
            specialWeaponLevel: 0, // 特殊武器等级
            addPercent: [], // 附加百分比属性集合
            runeLevel: 0, // 符文等级
        }
        User.PlayerInfo.Roles.push(RoleDatas);
        
    }catch(error){
        console.log(error)
    }
    socket.userData=User;
}