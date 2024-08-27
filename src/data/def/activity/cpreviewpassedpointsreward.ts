
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CPreviewPassedPointsReward {
}

class CPreviewPassedPointsReward {
    static DefaultData: CPreviewPassedPointsReward = {
    }

    static Unmarshal(buffer: Buffer): CPreviewPassedPointsReward { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CPreviewPassedPointsReward.DefaultData);
    }

    static Marshal(data: CPreviewPassedPointsReward): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CPreviewPassedPointsReward;