import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';
import CChangeSysConfig from '../../../data/def/user/cchangesysconfig';
import SChangeSysConfig from '../../../data/def/user/schangesysconfig';

export default async function(socket:any, rawData:Buffer) {
    const User = new UserData(socket.userData);
    const client_message= CChangeSysConfig.Unmarshal(rawData);

    const configs = User.PlayerInfo.UserInfo.configs;
    client_message.configs.forEach(([key,value])=>{
        const configIndex = configs.findIndex(([server_key,server_value])=>server_key===key);
        configs[configIndex]=[key,value]
    })

    socket.send(CmdID.user.schangesysconfig,
        SChangeSysConfig.Marshal(
            {
                configs: User.PlayerInfo.UserInfo.configs
            }
        )
    );

    socket.userData =User;
};

