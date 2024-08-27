
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChristmasSupportRedPoint {
	state : number[];
}

class SChristmasSupportRedPoint {
    static DefaultData: SChristmasSupportRedPoint = {
	state : [],
    }

    static Unmarshal(buffer: Buffer): SChristmasSupportRedPoint { 
	const reader = new BufferReader(buffer)
try{
	const stateLength = reader.readCompactUInt32();

	for (let i = 0; i < stateLength; i++) {
	    SChristmasSupportRedPoint.DefaultData.state.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChristmasSupportRedPoint.DefaultData);
    }

    static Marshal(data: SChristmasSupportRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.state).length);
	data.state.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChristmasSupportRedPoint;