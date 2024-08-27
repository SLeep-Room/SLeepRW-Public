
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeSubChannel {
	num : number;
}

class CChangeSubChannel {
    static DefaultData: CChangeSubChannel = {
	num : 0,
    }

    static Unmarshal(buffer: Buffer): CChangeSubChannel { 
	const reader = new BufferReader(buffer)
try{
	CChangeSubChannel.DefaultData.num = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeSubChannel.DefaultData);
    }

    static Marshal(data: CChangeSubChannel): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.num)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeSubChannel;