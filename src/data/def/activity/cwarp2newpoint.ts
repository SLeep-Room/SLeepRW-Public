
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CWarp2NewPoint {
	toNextFloor : number;
}

class CWarp2NewPoint {
    static DefaultData: CWarp2NewPoint = {
	toNextFloor : 0,
    }

    static Unmarshal(buffer: Buffer): CWarp2NewPoint { 
	const reader = new BufferReader(buffer)
try{
	CWarp2NewPoint.DefaultData.toNextFloor = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CWarp2NewPoint.DefaultData);
    }

    static Marshal(data: CWarp2NewPoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.toNextFloor)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CWarp2NewPoint;