
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOffline {
	offtype : number;
	reason : string;
}

class SOffline {
    static DefaultData: SOffline = {
	offtype : 0,
	reason : "",
    }

    static Unmarshal(buffer: Buffer): SOffline { 
	const reader = new BufferReader(buffer)
try{
	SOffline.DefaultData.offtype = reader.readInt32()
	SOffline.DefaultData.reason = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOffline.DefaultData);
    }

    static Marshal(data: SOffline): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.offtype)
	buffer.writeString(data.reason)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOffline;