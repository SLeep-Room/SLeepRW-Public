
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenSummerReward {
}

class COpenSummerReward {
    static DefaultData: COpenSummerReward = {
    }

    static Unmarshal(buffer: Buffer): COpenSummerReward { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenSummerReward.DefaultData);
    }

    static Marshal(data: COpenSummerReward): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenSummerReward;