
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface GuidTypes {
}

class GuidTypes {
    static DefaultData: GuidTypes = {
    }

    static Unmarshal(buffer: BufferReader): GuidTypes { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},GuidTypes.DefaultData);
    }

    static Marshal(data: GuidTypes): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}

const GuidTypesEnum = {
    NEW_GUIDE_1: 1,
    TEN_DRAW: 2,
    MAGIC_FIRST_WIN_SHITOUREN: 3,
    FIRST_ENTER_DUNGEON: 4,
    SPECIAL_ITEM: 5,
    EQUIP_STRENGTHEN: 6,
    AUTO_EXPLORE: 7,
    COLLECT_LIGHT_SPOT: 8,
    RUNE: 9,
    SUPPORT_LIST: 10,
    SUPPORT_GUIDE: 11,
    BATTLE_RETREAT: 12,
    DAILY_TASK: 13,
    BOSS_RUSH: 14,
    TOWER_RUSH: 15,
    NEW_USER_TEN_DRAW: 16,
    LEVEL_GIFT: 17,
    SIDE_QUEST: 18,
    BATTLE_2X: 19,
    AG_COIN: 20,
    EVERYDAY_SIGN: 21,
    PARTY: 22,
    ARENA: 23,
    FORGE_WORKER_APPEAR: 100,
    YARD_APPEAR: 1215,
    GUIDE_2003: 2003,
    FOREST_BOSS_BACK: 2004,
    GUIDE_2007: 2007,
    GUIDE_2008: 2008,
    GUIDE_2009: 2009,
    GUIDE_2010: 2010,
}


export default GuidTypesEnum;