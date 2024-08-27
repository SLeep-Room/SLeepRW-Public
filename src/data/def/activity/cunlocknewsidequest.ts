
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUnlockNewSideQuest {
	unlockDungeonID : number;
}

class CUnlockNewSideQuest {
    static DefaultData: CUnlockNewSideQuest = {
	unlockDungeonID : 0,
    }

    static Unmarshal(buffer: Buffer): CUnlockNewSideQuest { 
	const reader = new BufferReader(buffer)
try{
	CUnlockNewSideQuest.DefaultData.unlockDungeonID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUnlockNewSideQuest.DefaultData);
    }

    static Marshal(data: CUnlockNewSideQuest): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.unlockDungeonID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUnlockNewSideQuest;