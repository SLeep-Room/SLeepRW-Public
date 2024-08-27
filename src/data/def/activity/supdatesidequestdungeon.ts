
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import dungeons from '../../bean/activity/sidequestdungeoninfo';

interface SUpdateSideQuestDungeon {
	dungeons : typeof dungeons.DefaultData;
}

class SUpdateSideQuestDungeon {
    static DefaultData: SUpdateSideQuestDungeon = {
	dungeons : dungeons.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SUpdateSideQuestDungeon { 
	const reader = new BufferReader(buffer)
try{
	SUpdateSideQuestDungeon.DefaultData.dungeons = dungeons.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUpdateSideQuestDungeon.DefaultData);
    }

    static Marshal(data: SUpdateSideQuestDungeon): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(dungeons.Marshal(data.dungeons))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUpdateSideQuestDungeon;