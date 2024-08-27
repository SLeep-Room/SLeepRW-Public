import { CmdID } from '../../../data/CmdID';
import { UserData } from '../../../db/UserData';

import COpenParty from '../../../data/def/party/copenparty';
import SOpenParty from '../../../data/def/party/sopenparty';
import SLightPartyRedPoint from '../../../data/def/party/slightpartyredpoint';
import SNotifyPosition from '../../../data/def/party/snotifyposition';

// 处理客户端请求打开公会

export default async function(socket:any, rawData:Buffer) { 
  const User = new UserData(socket.userData);
  const client_message= COpenParty.Unmarshal(rawData);
    //console.log(client_message)

    socket.send( CmdID.party.slightpartyredpoint ,
      SLightPartyRedPoint.Marshal({
        redpointType: []
      })
    );
    
    socket.send( CmdID.party.sopenparty ,
      SOpenParty.Marshal({
        partyInfo:{
            // 公会ID
            partyId:10001n,
            // 进入次数
            enterNum:0,//无用
            // 总次数
            totalNum:0,//无用
            // 头像ID
            avatarId:1,//cguildhead
            // 公会名称
            partyName:"test",
            // 公会等级
            partyLv:3,
            // 公会经验
            partyExp:0,
            // 自动接受申请
            autoAcceptApply:1,
        },
        partyDeclaration:"<p2>awa</p2>",//工会宣言
        position:4,//位置
        hesitationPeriod:1,//延迟期 0不在 1在
        firstEnter:1,//首次进入 客户端不会处理不用管
        crossdayInterval:BigInt(Date.now()),//提升等级时间 levelUpTime
      })
    );

    
};

