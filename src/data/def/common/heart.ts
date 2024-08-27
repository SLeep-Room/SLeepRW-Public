
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Heart {
}

class Heart {
    static DefaultData: Heart = {
    }

    static Unmarshal(buffer: Buffer): Heart { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Heart.DefaultData);
    }

    static Marshal(data: Heart): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Heart;