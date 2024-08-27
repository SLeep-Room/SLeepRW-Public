
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetReceivingRecords {
}

class CGetReceivingRecords {
    static DefaultData: CGetReceivingRecords = {
    }

    static Unmarshal(buffer: Buffer): CGetReceivingRecords { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetReceivingRecords.DefaultData);
    }

    static Marshal(data: CGetReceivingRecords): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetReceivingRecords;