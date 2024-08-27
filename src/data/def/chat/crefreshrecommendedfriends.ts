
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRefreshRecommendedFriends {
}

class CRefreshRecommendedFriends {
    static DefaultData: CRefreshRecommendedFriends = {
    }

    static Unmarshal(buffer: Buffer): CRefreshRecommendedFriends { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRefreshRecommendedFriends.DefaultData);
    }

    static Marshal(data: CRefreshRecommendedFriends): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRefreshRecommendedFriends;