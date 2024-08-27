
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDailyTaskForAccept {
}

class CDailyTaskForAccept {
    static DefaultData: CDailyTaskForAccept = {
    }

    static Unmarshal(buffer: Buffer): CDailyTaskForAccept { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDailyTaskForAccept.DefaultData);
    }

    static Marshal(data: CDailyTaskForAccept): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDailyTaskForAccept;