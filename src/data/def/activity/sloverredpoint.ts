
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SLoverRedPoint {
	state : number;
}

class SLoverRedPoint {
    static DefaultData: SLoverRedPoint = {
	state : 0,
    }

    static Unmarshal(buffer: Buffer): SLoverRedPoint { 
	const reader = new BufferReader(buffer)
try{
	SLoverRedPoint.DefaultData.state = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLoverRedPoint.DefaultData);
    }

    static Marshal(data: SLoverRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLoverRedPoint;