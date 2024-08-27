import { CmdID } from '../../../data/CmdID';

import COpenDungeonList from '../../../data/def/battle/copendungeonlist';
import SOpenDungeonList from '../../import/battle/sopendungeonlist';

export default async function (socket: any, rawData: Buffer) {

    const client_message = COpenDungeonList.Unmarshal(rawData);

    await SOpenDungeonList(socket);
}


