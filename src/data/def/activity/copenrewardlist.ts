
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenRewardList {
}

class COpenRewardList {
    static DefaultData: COpenRewardList = {
    }

    static Unmarshal(buffer: Buffer): COpenRewardList { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenRewardList.DefaultData);
    }

    static Marshal(data: COpenRewardList): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenRewardList;