
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUnlockNewSideQuest {
	result : number;
	dungeonID : number;
}

class SUnlockNewSideQuest {
    static DefaultData: SUnlockNewSideQuest = {
	result : 0,
	dungeonID : 0,
    }

    static Unmarshal(buffer: Buffer): SUnlockNewSideQuest { 
	const reader = new BufferReader(buffer)
try{
	SUnlockNewSideQuest.DefaultData.result = reader.readInt32()
	SUnlockNewSideQuest.DefaultData.dungeonID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUnlockNewSideQuest.DefaultData);
    }

    static Marshal(data: SUnlockNewSideQuest): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)
	buffer.writeInt32(data.dungeonID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUnlockNewSideQuest;