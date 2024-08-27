
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeSubChannel {
	num : number;
}

class SChangeSubChannel {
    static DefaultData: SChangeSubChannel = {
	num : 0,
    }

    static Unmarshal(buffer: Buffer): SChangeSubChannel { 
	const reader = new BufferReader(buffer)
try{
	SChangeSubChannel.DefaultData.num = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeSubChannel.DefaultData);
    }

    static Marshal(data: SChangeSubChannel): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.num)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeSubChannel;