
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface MainLineRewardStatus {
}

class MainLineRewardStatus {
    static DefaultData: MainLineRewardStatus = {
    }

    static Unmarshal(buffer: BufferReader): MainLineRewardStatus { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},MainLineRewardStatus.DefaultData);
    }

    static Marshal(data: MainLineRewardStatus): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default MainLineRewardStatus;