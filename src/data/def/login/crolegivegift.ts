
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRoleGiveGift {
	id : number;
	items : [number,number][];
}

class CRoleGiveGift {
    static DefaultData: CRoleGiveGift = {
	id : 0,
	items : [],
    }

    static Unmarshal(buffer: Buffer): CRoleGiveGift { 
	const reader = new BufferReader(buffer)
try{
	CRoleGiveGift.DefaultData.id = reader.readInt32()
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    CRoleGiveGift.DefaultData.items.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRoleGiveGift.DefaultData);
    }

    static Marshal(data: CRoleGiveGift): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRoleGiveGift;