
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCheckGainNumber {
}

class CCheckGainNumber {
    static DefaultData: CCheckGainNumber = {
    }

    static Unmarshal(buffer: Buffer): CCheckGainNumber { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCheckGainNumber.DefaultData);
    }

    static Marshal(data: CCheckGainNumber): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCheckGainNumber;