
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SBreakThroughEquip {
	equipKey : number;
	stage : number;
}

class SBreakThroughEquip {
    static DefaultData: SBreakThroughEquip = {
	equipKey : 0,
	stage : 0,
    }

    static Unmarshal(buffer: Buffer): SBreakThroughEquip { 
	const reader = new BufferReader(buffer)
try{
	SBreakThroughEquip.DefaultData.equipKey = reader.readInt32()
	SBreakThroughEquip.DefaultData.stage = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBreakThroughEquip.DefaultData);
    }

    static Marshal(data: SBreakThroughEquip): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.equipKey)
	buffer.writeInt32(data.stage)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBreakThroughEquip;