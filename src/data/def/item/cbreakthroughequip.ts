
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBreakThroughEquip {
	equipKey : number;
	costEquipKeys : number[];
}

class CBreakThroughEquip {
    static DefaultData: CBreakThroughEquip = {
	equipKey : 0,
	costEquipKeys : [],
    }

    static Unmarshal(buffer: Buffer): CBreakThroughEquip { 
	const reader = new BufferReader(buffer)
try{
	CBreakThroughEquip.DefaultData.equipKey = reader.readInt32()
	const costEquipKeysLength = reader.readCompactUInt32();

	for (let i = 0; i < costEquipKeysLength; i++) {
	    CBreakThroughEquip.DefaultData.costEquipKeys.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBreakThroughEquip.DefaultData);
    }

    static Marshal(data: CBreakThroughEquip): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.equipKey)
	buffer.writeCompactInt32(Object.keys(data.costEquipKeys).length);
	data.costEquipKeys.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBreakThroughEquip;