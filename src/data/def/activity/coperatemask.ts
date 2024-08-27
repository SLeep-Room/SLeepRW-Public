
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COperateMask {
	mask : number;
	operate : number;
}

class COperateMask {
    static DefaultData: COperateMask = {
	mask : 0,
	operate : 0,
    }

    static Unmarshal(buffer: Buffer): COperateMask { 
	const reader = new BufferReader(buffer)
try{
	COperateMask.DefaultData.mask = reader.readInt32()
	COperateMask.DefaultData.operate = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COperateMask.DefaultData);
    }

    static Marshal(data: COperateMask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.mask)
	buffer.writeInt32(data.operate)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COperateMask;