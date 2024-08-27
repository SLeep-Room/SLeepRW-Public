
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSkinRedPoints {
	looked : number[];
}

class SSkinRedPoints {
    static DefaultData: SSkinRedPoints = {
	looked : [],
    }

    static Unmarshal(buffer: Buffer): SSkinRedPoints { 
	const reader = new BufferReader(buffer)
try{
	const lookedLength = reader.readCompactUInt32();

	for (let i = 0; i < lookedLength; i++) {
	    SSkinRedPoints.DefaultData.looked.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSkinRedPoints.DefaultData);
    }

    static Marshal(data: SSkinRedPoints): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.looked).length);
	data.looked.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSkinRedPoints;