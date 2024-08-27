
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRuneInfo {
	state : number;
	dialogId : number;
}

class SRuneInfo {
    static DefaultData: SRuneInfo = {
	state : 0,
	dialogId : 0,
    }

    static Unmarshal(buffer: Buffer): SRuneInfo { 
	const reader = new BufferReader(buffer)
try{
	SRuneInfo.DefaultData.state = reader.readInt32()
	SRuneInfo.DefaultData.dialogId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRuneInfo.DefaultData);
    }

    static Marshal(data: SRuneInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)
	buffer.writeInt32(data.dialogId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRuneInfo;