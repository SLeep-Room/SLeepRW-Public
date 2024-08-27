
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COffline {
	offtype : number;
}

class COffline {
    static DefaultData: COffline = {
	offtype : 0,
    }

    static Unmarshal(buffer: Buffer): COffline { 
	const reader = new BufferReader(buffer)
try{
	COffline.DefaultData.offtype = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COffline.DefaultData);
    }

    static Marshal(data: COffline): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.offtype)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COffline;