
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface HandbookType {
}

class HandbookType {
    static DefaultData: HandbookType = {
    }

    static Unmarshal(buffer: BufferReader): HandbookType { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},HandbookType.DefaultData);
    }

    static Marshal(data: HandbookType): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default HandbookType;