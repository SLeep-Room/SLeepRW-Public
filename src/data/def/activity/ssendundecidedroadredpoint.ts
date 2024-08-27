
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendUndecidedRoadRedPoint {
}

class SSendUndecidedRoadRedPoint {
    static DefaultData: SSendUndecidedRoadRedPoint = {
    }

    static Unmarshal(buffer: Buffer): SSendUndecidedRoadRedPoint { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendUndecidedRoadRedPoint.DefaultData);
    }

    static Marshal(data: SSendUndecidedRoadRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendUndecidedRoadRedPoint;