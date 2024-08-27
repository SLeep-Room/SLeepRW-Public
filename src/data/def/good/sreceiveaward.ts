
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SReceiveAward {
	roleId : number;
	level : number;
}

class SReceiveAward {
    static DefaultData: SReceiveAward = {
	roleId : 0,
	level : 0,
    }

    static Unmarshal(buffer: Buffer): SReceiveAward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveAward.DefaultData.roleId = reader.readInt32()
	SReceiveAward.DefaultData.level = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveAward.DefaultData);
    }

    static Marshal(data: SReceiveAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.level)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveAward;