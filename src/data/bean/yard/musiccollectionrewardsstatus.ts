
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface MusicCollectionRewardsStatus {
}

class MusicCollectionRewardsStatus {
    static DefaultData: MusicCollectionRewardsStatus = {
    }

    static Unmarshal(buffer: BufferReader): MusicCollectionRewardsStatus { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},MusicCollectionRewardsStatus.DefaultData);
    }

    static Marshal(data: MusicCollectionRewardsStatus): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default MusicCollectionRewardsStatus;