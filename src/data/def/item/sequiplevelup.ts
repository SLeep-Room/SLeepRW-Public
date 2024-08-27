
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SEquipLevelUp {
	equipKey : number;
	lv : number;
	exp : number;
	power : number;
	finalAttr : [number,number][];
}

class SEquipLevelUp {
    static DefaultData: SEquipLevelUp = {
	equipKey : 0,
	lv : 0,
	exp : 0,
	power : 0,
	finalAttr : [],
    }

    static Unmarshal(buffer: Buffer): SEquipLevelUp { 
	const reader = new BufferReader(buffer)
try{
	SEquipLevelUp.DefaultData.equipKey = reader.readInt32()
	SEquipLevelUp.DefaultData.lv = reader.readInt32()
	SEquipLevelUp.DefaultData.exp = reader.readInt32()
	SEquipLevelUp.DefaultData.power = reader.readInt32()
	const finalAttrLength = reader.readCompactUInt32();

	for (let i = 0; i < finalAttrLength; i++) {
	    SEquipLevelUp.DefaultData.finalAttr.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SEquipLevelUp.DefaultData);
    }

    static Marshal(data: SEquipLevelUp): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.equipKey)
	buffer.writeInt32(data.lv)
	buffer.writeInt32(data.exp)
	buffer.writeInt32(data.power)
	buffer.writeCompactInt32(Object.keys(data.finalAttr).length);
	data.finalAttr.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SEquipLevelUp;