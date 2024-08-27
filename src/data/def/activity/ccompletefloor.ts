
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCompleteFloor {
	floorId : number;
}

class CCompleteFloor {
    static DefaultData: CCompleteFloor = {
	floorId : 0,
    }

    static Unmarshal(buffer: Buffer): CCompleteFloor { 
	const reader = new BufferReader(buffer)
try{
	CCompleteFloor.DefaultData.floorId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCompleteFloor.DefaultData);
    }

    static Marshal(data: CCompleteFloor): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.floorId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCompleteFloor;