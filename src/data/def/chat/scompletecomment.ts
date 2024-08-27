
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SCompleteComment {
}

class SCompleteComment {
    static DefaultData: SCompleteComment = {
    }

    static Unmarshal(buffer: Buffer): SCompleteComment { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCompleteComment.DefaultData);
    }

    static Marshal(data: SCompleteComment): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCompleteComment;