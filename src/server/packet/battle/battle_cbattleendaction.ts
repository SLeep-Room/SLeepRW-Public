import { CmdID } from '../../../data/CmdID';

import CBattleEndAction from '../../../data/def/battle/cbattleendaction';
import SEnterDungeon from '../../../server/import/battle/senterdungeon';

export default async function (socket: any, rawData: Buffer) {
  const client_message = CBattleEndAction.Unmarshal(rawData);
  
  //await SEnterDungeon(socket, 30001);
}


