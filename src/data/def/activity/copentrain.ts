
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenTrain {
}

class COpenTrain {
    static DefaultData: COpenTrain = {
    }

    static Unmarshal(buffer: Buffer): COpenTrain { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenTrain.DefaultData);
    }

    static Marshal(data: COpenTrain): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenTrain;