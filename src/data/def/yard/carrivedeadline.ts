
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CArriveDeadLine {
	positionId : number;
}

class CArriveDeadLine {
    static DefaultData: CArriveDeadLine = {
	positionId : 0,
    }

    static Unmarshal(buffer: Buffer): CArriveDeadLine { 
	const reader = new BufferReader(buffer)
try{
	CArriveDeadLine.DefaultData.positionId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CArriveDeadLine.DefaultData);
    }

    static Marshal(data: CArriveDeadLine): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.positionId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CArriveDeadLine;