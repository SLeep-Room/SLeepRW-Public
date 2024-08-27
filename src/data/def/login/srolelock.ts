
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRoleLock {
	roleId : number;
	lock : number;
}

class SRoleLock {
    static DefaultData: SRoleLock = {
	roleId : 0,
	lock : 0,
    }

    static Unmarshal(buffer: Buffer): SRoleLock { 
	const reader = new BufferReader(buffer)
try{
	SRoleLock.DefaultData.roleId = reader.readInt32()
	SRoleLock.DefaultData.lock = reader.readInt16()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRoleLock.DefaultData);
    }

    static Marshal(data: SRoleLock): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt16(data.lock)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRoleLock;