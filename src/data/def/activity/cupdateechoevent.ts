
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUpdateEchoEvent {
}

class CUpdateEchoEvent {
    static DefaultData: CUpdateEchoEvent = {
    }

    static Unmarshal(buffer: Buffer): CUpdateEchoEvent { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUpdateEchoEvent.DefaultData);
    }

    static Marshal(data: CUpdateEchoEvent): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUpdateEchoEvent;