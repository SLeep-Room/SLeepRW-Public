
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveAward {
	roleId : number;
	level : number;
}

class CReceiveAward {
    static DefaultData: CReceiveAward = {
	roleId : 0,
	level : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveAward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveAward.DefaultData.roleId = reader.readInt32()
	CReceiveAward.DefaultData.level = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveAward.DefaultData);
    }

    static Marshal(data: CReceiveAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.level)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveAward;