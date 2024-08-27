import { CmdID } from '../../../data/CmdID';
import SRoleList from '../../../data/def/login/srolelist';
import {UserData} from '../../../db/UserData';

export default async function(socket:any) {
    const User = new UserData(socket.userData);
    const roles = User.PlayerInfo.Roles;
    const excludedIds = new Set([31, 40, 50, 46, 58, 62]); // 使用Set存储排除的ID
    const batchSize = 30; // 每批发送的角色数量

    for (let i = 0; i < roles.length; i++) {
        const data = roles[i];
        // 检查ID是否在排除列表中
        if (!excludedIds.has(data.id)) {
            const newRoles = []; // 批次角色列表
            newRoles.push(data);
            // 检查是否达到批次大小
            while (newRoles.length < batchSize && i < roles.length - 1) {
                i++;
                if (!excludedIds.has(roles[i].id)) {
                    newRoles.push(roles[i]);
                }
            }
            // 发送当前批次的角色数据
            try {
                socket.send(CmdID.login.srolelist,
                    SRoleList.Marshal({
                        roles: newRoles,
                        capacity: newRoles.length
                    })
                );
            } catch (error) {
                console.error(error);
            }
        }
    }
}