
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SAnniversarySupply {
	supply : [number,number][];
}

class SAnniversarySupply {
    static DefaultData: SAnniversarySupply = {
	supply : [],
    }

    static Unmarshal(buffer: Buffer): SAnniversarySupply { 
	const reader = new BufferReader(buffer)
try{
	const supplyLength = reader.readCompactUInt32();

	for (let i = 0; i < supplyLength; i++) {
	    SAnniversarySupply.DefaultData.supply.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAnniversarySupply.DefaultData);
    }

    static Marshal(data: SAnniversarySupply): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.supply).length);
	data.supply.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAnniversarySupply;