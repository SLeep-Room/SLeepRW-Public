
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRepairHandbook {
	id : number;
}

class CRepairHandbook {
    static DefaultData: CRepairHandbook = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CRepairHandbook { 
	const reader = new BufferReader(buffer)
try{
	CRepairHandbook.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRepairHandbook.DefaultData);
    }

    static Marshal(data: CRepairHandbook): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRepairHandbook;