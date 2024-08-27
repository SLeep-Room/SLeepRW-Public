
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CResetPassedQuest {
	resetID : number;
}

class CResetPassedQuest {
    static DefaultData: CResetPassedQuest = {
	resetID : 0,
    }

    static Unmarshal(buffer: Buffer): CResetPassedQuest { 
	const reader = new BufferReader(buffer)
try{
	CResetPassedQuest.DefaultData.resetID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CResetPassedQuest.DefaultData);
    }

    static Marshal(data: CResetPassedQuest): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.resetID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CResetPassedQuest;