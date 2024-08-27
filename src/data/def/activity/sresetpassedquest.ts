
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SResetPassedQuest {
	result : number;
}

class SResetPassedQuest {
    static DefaultData: SResetPassedQuest = {
	result : 0,
    }

    static Unmarshal(buffer: Buffer): SResetPassedQuest { 
	const reader = new BufferReader(buffer)
try{
	SResetPassedQuest.DefaultData.result = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SResetPassedQuest.DefaultData);
    }

    static Marshal(data: SResetPassedQuest): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SResetPassedQuest;