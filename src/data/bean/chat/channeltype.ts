
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface ChannelType {
}

class ChannelType {
    static DefaultData: ChannelType = {
    }

    static Unmarshal(buffer: BufferReader): ChannelType { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ChannelType.DefaultData);
    }

    static Marshal(data: ChannelType): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ChannelType;