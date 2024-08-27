
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetMailList {
}

class CGetMailList {
    static DefaultData: CGetMailList = {
    }

    static Unmarshal(buffer: Buffer): CGetMailList { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetMailList.DefaultData);
    }

    static Marshal(data: CGetMailList): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetMailList;