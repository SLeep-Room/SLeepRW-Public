
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendFoolsRedPoint {
	redpoint : number[];
}

class SSendFoolsRedPoint {
    static DefaultData: SSendFoolsRedPoint = {
	redpoint : [],
    }

    static Unmarshal(buffer: Buffer): SSendFoolsRedPoint { 
	const reader = new BufferReader(buffer)
try{
	const redpointLength = reader.readCompactUInt32();

	for (let i = 0; i < redpointLength; i++) {
	    SSendFoolsRedPoint.DefaultData.redpoint.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendFoolsRedPoint.DefaultData);
    }

    static Marshal(data: SSendFoolsRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.redpoint).length);
	data.redpoint.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendFoolsRedPoint;