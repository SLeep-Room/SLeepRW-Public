
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CStrengthenEquip {
	equipKey : number;
	costEquip : number[];
	stuffs : [number,number][];
}

class CStrengthenEquip {
    static DefaultData: CStrengthenEquip = {
	equipKey : 0,
	costEquip : [],
	stuffs : [],
    }

    static Unmarshal(buffer: Buffer): CStrengthenEquip { 
	const reader = new BufferReader(buffer)
try{
	CStrengthenEquip.DefaultData.equipKey = reader.readInt32()
	const costEquipLength = reader.readCompactUInt32();

	for (let i = 0; i < costEquipLength; i++) {
	    CStrengthenEquip.DefaultData.costEquip.push(reader.readInt32());
	}
	const stuffsLength = reader.readCompactUInt32();

	for (let i = 0; i < stuffsLength; i++) {
	    CStrengthenEquip.DefaultData.stuffs.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CStrengthenEquip.DefaultData);
    }

    static Marshal(data: CStrengthenEquip): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.equipKey)
	buffer.writeCompactInt32(Object.keys(data.costEquip).length);
	data.costEquip.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.stuffs).length);
	data.stuffs.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CStrengthenEquip;