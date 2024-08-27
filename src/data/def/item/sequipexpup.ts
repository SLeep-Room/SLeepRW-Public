
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SEquipExpUp {
	equipKey : number;
	exp : number;
}

class SEquipExpUp {
    static DefaultData: SEquipExpUp = {
	equipKey : 0,
	exp : 0,
    }

    static Unmarshal(buffer: Buffer): SEquipExpUp { 
	const reader = new BufferReader(buffer)
try{
	SEquipExpUp.DefaultData.equipKey = reader.readInt32()
	SEquipExpUp.DefaultData.exp = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SEquipExpUp.DefaultData);
    }

    static Marshal(data: SEquipExpUp): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.equipKey)
	buffer.writeInt32(data.exp)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SEquipExpUp;