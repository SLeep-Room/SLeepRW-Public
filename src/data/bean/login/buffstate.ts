
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface BuffState {
}

class BuffState {
    static DefaultData: BuffState = {
    }

    static Unmarshal(buffer: BufferReader): BuffState { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},BuffState.DefaultData);
    }

    static Marshal(data: BuffState): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default BuffState;