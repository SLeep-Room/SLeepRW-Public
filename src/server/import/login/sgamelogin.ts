import { CmdID } from '../../../data/CmdID';
import Serializable  from '../../../util/buffer/Serializable';
import SGameLogin from '../../../data/def/login/sgamelogin';
import clientPool from '../../../index';


export default async function(socket:any) { 
    socket.send(CmdID.login.sgamelogin, SGameLogin.Marshal({}))
}