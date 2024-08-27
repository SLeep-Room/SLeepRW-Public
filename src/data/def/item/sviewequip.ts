
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SViewEquip {
	key : number;
	viewDetails : number;
}

class SViewEquip {
    static DefaultData: SViewEquip = {
	key : 0,
	viewDetails : 0,
    }

    static Unmarshal(buffer: Buffer): SViewEquip { 
	const reader = new BufferReader(buffer)
try{
	SViewEquip.DefaultData.key = reader.readInt32()
	SViewEquip.DefaultData.viewDetails = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SViewEquip.DefaultData);
    }

    static Marshal(data: SViewEquip): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.key)
	buffer.writeInt32(data.viewDetails)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SViewEquip;