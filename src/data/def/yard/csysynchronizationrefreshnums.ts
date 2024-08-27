
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSySynchronizationRefreshNums {
}

class CSySynchronizationRefreshNums {
    static DefaultData: CSySynchronizationRefreshNums = {
    }

    static Unmarshal(buffer: Buffer): CSySynchronizationRefreshNums { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSySynchronizationRefreshNums.DefaultData);
    }

    static Marshal(data: CSySynchronizationRefreshNums): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSySynchronizationRefreshNums;