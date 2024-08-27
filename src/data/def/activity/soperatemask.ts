
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOperateMask {
	result : number;
	mask : number;
	state : number;
}

class SOperateMask {
    static DefaultData: SOperateMask = {
	result : 0,
	mask : 0,
	state : 0,
    }

    static Unmarshal(buffer: Buffer): SOperateMask { 
	const reader = new BufferReader(buffer)
try{
	SOperateMask.DefaultData.result = reader.readInt32()
	SOperateMask.DefaultData.mask = reader.readInt32()
	SOperateMask.DefaultData.state = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOperateMask.DefaultData);
    }

    static Marshal(data: SOperateMask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)
	buffer.writeInt32(data.mask)
	buffer.writeInt32(data.state)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOperateMask;