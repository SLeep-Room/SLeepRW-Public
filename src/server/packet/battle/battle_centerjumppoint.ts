import { CmdID } from '../../../data/CmdID';

import CEnterJumpPoint from '../../../data/def/battle/centerjumppoint';
import SEnterDungeon from '../../import/battle/senterdungeon';
import SCancelLoading from '../../../data/def/notify/scancelloading';

import DungeonSelectMainLine from '../../../data/excel/dungeonselect/cdungeonselectmainline.json';
import CDungeonBattleConfig from '../../../data/excel/dungeonbattle/cdungeonbattleconfig.json';
import TrapSceneConfig from '../../../data/excel/trap/ctrapsceneconfig.json';//陷阱
import SceneJump from '../../../data/excel/scene/cscenejump.json';//场景跳转
import MonsterMoveRoute from '../../../data/excel/dungeonbattle/cmonstermoveroute.json';//场景跳转



export default async function (socket: any, rawData: Buffer) {

    const client_message = CEnterJumpPoint.Unmarshal(rawData);
    const Jump = Object.values(SceneJump.Data).find(data=>data.id==client_message.id)
    await SEnterDungeon(socket,Jump.aimSceneID[0]);
}


