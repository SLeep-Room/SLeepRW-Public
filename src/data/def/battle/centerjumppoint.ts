
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CEnterJumpPoint {
	id : number;
	outpoint : number;
}

class CEnterJumpPoint {
    static DefaultData: CEnterJumpPoint = {
	id : 0,
	outpoint : 0,
    }

    static Unmarshal(buffer: Buffer): CEnterJumpPoint { 
	const reader = new BufferReader(buffer)
try{
	CEnterJumpPoint.DefaultData.id = reader.readInt32()
	CEnterJumpPoint.DefaultData.outpoint = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CEnterJumpPoint.DefaultData);
    }

    static Marshal(data: CEnterJumpPoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.outpoint)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CEnterJumpPoint;