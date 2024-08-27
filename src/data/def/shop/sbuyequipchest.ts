
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import equipments from '../../bean/item/beans/iteminfo';

interface SBuyEquipChest {
	result : number;
	remain : number;
	equipments : typeof equipments.DefaultData[];
}

class SBuyEquipChest {
    static DefaultData: SBuyEquipChest = {
	result : 0,
	remain : 0,
	equipments : [],
    }

    static Unmarshal(buffer: Buffer): SBuyEquipChest { 
	const reader = new BufferReader(buffer)
try{
	SBuyEquipChest.DefaultData.result = reader.readInt32()
	SBuyEquipChest.DefaultData.remain = reader.readInt32()
	const equipmentsLength = reader.readCompactUInt32();

	for (let i = 0; i < equipmentsLength; i++) {
	    SBuyEquipChest.DefaultData.equipments.push(equipments.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBuyEquipChest.DefaultData);
    }

    static Marshal(data: SBuyEquipChest): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)
	buffer.writeInt32(data.remain)
	buffer.writeCompactInt32(Object.keys(data.equipments).length);
	data.equipments.forEach((value) => {
		buffer.writeBuffer(equipments.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBuyEquipChest;