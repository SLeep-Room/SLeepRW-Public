
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SCheckPositionRemain {
	positionNumber : [number,number][];
}

class SCheckPositionRemain {
    static DefaultData: SCheckPositionRemain = {
	positionNumber : [],
    }

    static Unmarshal(buffer: Buffer): SCheckPositionRemain { 
	const reader = new BufferReader(buffer)
try{
	const positionNumberLength = reader.readCompactUInt32();

	for (let i = 0; i < positionNumberLength; i++) {
	    SCheckPositionRemain.DefaultData.positionNumber.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCheckPositionRemain.DefaultData);
    }

    static Marshal(data: SCheckPositionRemain): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.positionNumber).length);
	data.positionNumber.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCheckPositionRemain;