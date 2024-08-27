
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRougeTowerInitialBuffChoose {
	buff : number[];
}

class SRougeTowerInitialBuffChoose {
    static DefaultData: SRougeTowerInitialBuffChoose = {
	buff : [],
    }

    static Unmarshal(buffer: Buffer): SRougeTowerInitialBuffChoose { 
	const reader = new BufferReader(buffer)
try{
	const buffLength = reader.readCompactUInt32();

	for (let i = 0; i < buffLength; i++) {
	    SRougeTowerInitialBuffChoose.DefaultData.buff.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRougeTowerInitialBuffChoose.DefaultData);
    }

    static Marshal(data: SRougeTowerInitialBuffChoose): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.buff).length);
	data.buff.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRougeTowerInitialBuffChoose;