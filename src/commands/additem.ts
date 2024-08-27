
import Serializable from '../util/buffer/Serializable';
import { CmdID } from '../data/CmdID';
import CItemAttr from '../data/excel/item/citemattr.json';//场景
import AddItem from '../data/common/Item/AddItem';
import SRoleList from '../server/import/login/srolelist';
import SReceiveItems from '../data/def/item/sreceiveitems';
import SModifyItemNum from '../data/def/item/smodifyitemnum';
import SReqCoinNum from '../data/def/item/sreqcoinnum';

import SAddItem from '../data/def/item/sadditem';

export default async function (socket: any, command: any) {
    try{
        console.log(command);
        if(command.startsWith(' ')){
            command=command.substring(1).trim()
        }

        const itemID=command.split(' ')[0];
        const itemNum=parseInt(command.split(' ')[1]);
        if(itemID.includes("-")){
            const Data=[];
            for(let i=itemID.split("-")[0];i<=itemID.split("-")[1];i++){
                Data.push([parseInt(i),itemNum]);
            }
            await AddItem(socket,Data);
        }else{
            await AddItem(socket,[[parseInt(itemID),itemNum]]);
        }
    }catch(e){
        console.log(e);
    }
}