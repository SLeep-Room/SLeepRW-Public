
import Serializable from '../util/buffer/Serializable';
import { CmdID } from '../data/CmdID';
import RoleConfig from '../data/excel/role/roleconfig.json';//场景
import AddRole from '../data/common/Role/AddRole';
import SRoleList from '../server/import/login/srolelist';

export default async function (socket: any, command: any) {
    try{
        RoleConfig.AllIds.forEach(async (roleId: number) => {
            await AddRole(socket, roleId);
        });
        await SRoleList(socket);
    }catch(e){
        console.log(e);
    }
}