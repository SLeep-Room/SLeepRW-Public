import { CmdID } from '../../../data/CmdID';

import COpenDungeonBox from '../../../data/def/battle/copendungeonbox';
import SOpenDungeonBox from '../../../data/def/battle/sopendungeonbox';


import CDungeonSelectMainline from '../../../data/excel/dungeonselect/cdungeonselectmainline.json';
import CBoxConfig from '../../../data/excel/sceneinteractive/cboxconfig.json';
import ItemInfo from '../../../data/bean/item/beans/iteminfo';
import AddItem from '../../../data/common/Item/AddItem';

export default async function (socket: any, rawData: Buffer) {
  const client_message = COpenDungeonBox.Unmarshal(rawData);

  const {AddItemInfos,AddItemDatas} = await AddItem(socket,[[35001,1000]]);

  socket.send( CmdID.battle.sopendungeonbox ,
    SOpenDungeonBox.Marshal({
        boxId:client_message.boxId,
        items:AddItemInfos
    })
  );
}


