
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SCompleteFloor {
	floorId : number;
}

class SCompleteFloor {
    static DefaultData: SCompleteFloor = {
	floorId : 0,
    }

    static Unmarshal(buffer: Buffer): SCompleteFloor { 
	const reader = new BufferReader(buffer)
try{
	SCompleteFloor.DefaultData.floorId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCompleteFloor.DefaultData);
    }

    static Marshal(data: SCompleteFloor): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.floorId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCompleteFloor;