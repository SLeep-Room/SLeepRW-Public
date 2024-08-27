
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCompleteZone {
	floorId : number;
	outPoint : number;
}

class CCompleteZone {
    static DefaultData: CCompleteZone = {
	floorId : 0,
	outPoint : 0,
    }

    static Unmarshal(buffer: Buffer): CCompleteZone { 
	const reader = new BufferReader(buffer)
try{
	CCompleteZone.DefaultData.floorId = reader.readInt32()
	CCompleteZone.DefaultData.outPoint = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCompleteZone.DefaultData);
    }

    static Marshal(data: CCompleteZone): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.floorId)
	buffer.writeInt32(data.outPoint)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCompleteZone;