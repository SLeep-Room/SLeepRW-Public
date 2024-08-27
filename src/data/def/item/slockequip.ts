
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SLockEquip {
	key : number;
	lock : number;
}

class SLockEquip {
    static DefaultData: SLockEquip = {
	key : 0,
	lock : 0,
    }

    static Unmarshal(buffer: Buffer): SLockEquip { 
	const reader = new BufferReader(buffer)
try{
	SLockEquip.DefaultData.key = reader.readInt32()
	SLockEquip.DefaultData.lock = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLockEquip.DefaultData);
    }

    static Marshal(data: SLockEquip): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.key)
	buffer.writeInt32(data.lock)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLockEquip;