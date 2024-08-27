
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenFloorBox {
	floorId : number;
}

class COpenFloorBox {
    static DefaultData: COpenFloorBox = {
	floorId : 0,
    }

    static Unmarshal(buffer: Buffer): COpenFloorBox { 
	const reader = new BufferReader(buffer)
try{
	COpenFloorBox.DefaultData.floorId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenFloorBox.DefaultData);
    }

    static Marshal(data: COpenFloorBox): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.floorId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenFloorBox;