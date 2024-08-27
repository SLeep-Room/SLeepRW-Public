
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRoleLock {
	roleId : number;
}

class CRoleLock {
    static DefaultData: CRoleLock = {
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): CRoleLock { 
	const reader = new BufferReader(buffer)
try{
	CRoleLock.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRoleLock.DefaultData);
    }

    static Marshal(data: CRoleLock): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRoleLock;