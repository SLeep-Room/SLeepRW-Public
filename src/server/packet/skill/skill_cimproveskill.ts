import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';
import CImproveSkill from '../../../data/def/skill/cimproveskill';
import SImproveSkill from '../../../data/def/skill/simproveskill';
import SRoleList from '../../../server/import/login/srolelist';
import CSkillItem from '../../../data/excel/item/cskillitem.json'
import CSkillMap from '../../../data/excel/skill/cskillmap.json'
import Role from '../../../data/bean/login/role';

export default async function(socket:any, rawData:Buffer) {
    const User = new UserData(socket.userData);
    const client_message= CImproveSkill.Unmarshal(rawData);

    socket.send(CmdID.skill.simproveskill,
        SImproveSkill.Marshal({
            roleId: client_message.roleId,
            unlockNode:client_message.unlockNode,
        })
    );

    const roleIndex=User.PlayerInfo.Roles.findIndex(role=>role.id===client_message.roleId)

    User.PlayerInfo.Roles[roleIndex].unlockedNode.push(client_message.unlockNode);

    const contractSkillList:typeof Role.DefaultData.contractSkill=User.PlayerInfo.Roles[roleIndex].contractSkill;
    const NodeSkill = Object.values(CSkillMap.Data).find(data=>data.id===client_message.unlockNode);
    const SkillItem = Object.values(CSkillItem.Data).find(data=>data.id===NodeSkill.skillID);
    contractSkillList.push({
        skillItemId: SkillItem.assistskillID[0],
        skillLevel: SkillItem.assistskillID[0],
        selected:1,
        power:0,
    });


    socket.userData = User;
    await SRoleList(socket);
};

