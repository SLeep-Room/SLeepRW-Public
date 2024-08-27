import { CmdID } from '../../../data/CmdID';
import UpdateLineup from '../../../data/common/Lineup/UpdateLineup';
import { UserData } from '../../../db/UserData';
import UpRoleExp from '../../../data/common/Role/UpRoleExp';
import UseItem from '../../../data/common/Item/UseItem';
import CAddSoul from '../../../data/def/login/caddsoul';
import SRoleUpdateLv from '../../../data/def/login/sroleupdatelv';

export default async function(socket:any, rawData:Buffer) { 
    const client_message= CAddSoul.Unmarshal(rawData);

    await UseItem(socket,35002,client_message.soul);
    await UpRoleExp(socket,client_message.roleId,client_message.soul)
};

