import { CmdID } from '../../../data/CmdID';
import {UserData} from '../../../db/UserData';
import SResSpirit from '../../../data/def/item/sresspirit';

export default async function(socket:any) { 
    const User = new UserData(socket.userData);
    const NowTime = BigInt(Date.now())

    function HealSpirit(){
        if(NowTime-User.PlayerInfo.SpiritInfo.leftTime>60000){
            User.PlayerInfo.SpiritInfo.spirit+=1;
            User.PlayerInfo.SpiritInfo.leftTime=User.PlayerInfo.SpiritInfo.leftTime-60000n;
            if(User.PlayerInfo.SpiritInfo.spirit>User.PlayerInfo.SpiritInfo.strengthLimit){
                User.PlayerInfo.SpiritInfo.leftTime=NowTime;
            }else{
                HealSpirit()
            }
        }
    }

    if(User.PlayerInfo.SpiritInfo.strengthLimit>User.PlayerInfo.SpiritInfo.spirit){
        HealSpirit();
    }else if(User.PlayerInfo.SpiritInfo.spirit>=User.PlayerInfo.SpiritInfo.strengthLimit){
        User.PlayerInfo.SpiritInfo.leftTime=NowTime;
    }

    socket.send(CmdID.item.sresspirit, SResSpirit.Marshal({
        spirit:User.PlayerInfo.SpiritInfo.spirit,
        strengthLimit:User.PlayerInfo.SpiritInfo.strengthLimit,
        leftTime:User.PlayerInfo.SpiritInfo.leftTime,
        recoverTimes:User.PlayerInfo.SpiritInfo.recoverTimes,
    }))

    socket.userData=User;
}