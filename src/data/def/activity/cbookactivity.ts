
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBookActivity {
}

class CBookActivity {
    static DefaultData: CBookActivity = {
    }

    static Unmarshal(buffer: Buffer): CBookActivity { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBookActivity.DefaultData);
    }

    static Marshal(data: CBookActivity): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBookActivity;