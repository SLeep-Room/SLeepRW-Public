import {UserData} from '../../../db/UserData';

export default async function(socket:any, lineupID:number,sort:number,roleid:number) { 
    const User = new UserData(socket.userData);

    let roles = [];
    let lineupData = User.PlayerInfo.Lineups.find(data => data.id === lineupID);

    if (!lineupData) {
        throw new Error(`Lineup with ID ${lineupID} not found.`);
    }

    lineupData.roles.forEach(([key,role]) => {
        if(key==sort){
            roles.push([key,roleid]);
        }else{
            roles.push([key,role]);
        }
    });
    
    const lineupIndex = User.PlayerInfo.Lineups.findIndex(data => data.id === lineupID);
    User.PlayerInfo.Lineups[lineupIndex].roles = roles;

    socket.userData = User;
}

