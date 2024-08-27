import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';
import UseItem from '../../../data/common/Item/UseItem';
import SCancelLoading from '../../../data/def/notify/scancelloading'

import CEvolution from '../../../data/def/login/cevolution';
import SEvolution from '../../../data/def/login/sevolution';

export default async function(socket:any, rawData:Buffer) { 
    const User = new UserData(socket.userData);
    const client_message= CEvolution.Unmarshal(rawData);
    let roleIndex = User.PlayerInfo.Roles.findIndex(data=>data.id===client_message.roleId);
    User.PlayerInfo.Roles[roleIndex].evolution = User.PlayerInfo.Roles[roleIndex].evolution+1;


    await UseItem(socket, client_message.itemId, client_message.itemNum)

    socket.send(CmdID.login.sevolution,
        SEvolution.Marshal(
            {
                roleId: client_message.roleId,
                evolution: User.PlayerInfo.Roles[roleIndex].evolution,
            }
        )
    );
    socket.send(CmdID.notify.scancelloading,
        SCancelLoading.Marshal({
            protocolType:CmdID.login.cevolution,
        })
    );
};
