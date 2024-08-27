
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenDoubleElevenActivity {
}

class COpenDoubleElevenActivity {
    static DefaultData: COpenDoubleElevenActivity = {
    }

    static Unmarshal(buffer: Buffer): COpenDoubleElevenActivity { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenDoubleElevenActivity.DefaultData);
    }

    static Marshal(data: COpenDoubleElevenActivity): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenDoubleElevenActivity;