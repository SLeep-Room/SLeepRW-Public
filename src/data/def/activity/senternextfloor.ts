
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SEnterNextFloor {
	floorId : number;
}

class SEnterNextFloor {
    static DefaultData: SEnterNextFloor = {
	floorId : 0,
    }

    static Unmarshal(buffer: Buffer): SEnterNextFloor { 
	const reader = new BufferReader(buffer)
try{
	SEnterNextFloor.DefaultData.floorId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SEnterNextFloor.DefaultData);
    }

    static Marshal(data: SEnterNextFloor): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.floorId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SEnterNextFloor;