
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CComplementSigned {
	dayId : number;
}

class CComplementSigned {
    static DefaultData: CComplementSigned = {
	dayId : 0,
    }

    static Unmarshal(buffer: Buffer): CComplementSigned { 
	const reader = new BufferReader(buffer)
try{
	CComplementSigned.DefaultData.dayId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CComplementSigned.DefaultData);
    }

    static Marshal(data: CComplementSigned): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.dayId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CComplementSigned;