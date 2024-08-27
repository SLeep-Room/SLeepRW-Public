
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CArriveCompleteTime {
	id : number;
}

class CArriveCompleteTime {
    static DefaultData: CArriveCompleteTime = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CArriveCompleteTime { 
	const reader = new BufferReader(buffer)
try{
	CArriveCompleteTime.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CArriveCompleteTime.DefaultData);
    }

    static Marshal(data: CArriveCompleteTime): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CArriveCompleteTime;