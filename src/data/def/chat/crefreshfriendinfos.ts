
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRefreshFriendInfos {
}

class CRefreshFriendInfos {
    static DefaultData: CRefreshFriendInfos = {
    }

    static Unmarshal(buffer: Buffer): CRefreshFriendInfos { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRefreshFriendInfos.DefaultData);
    }

    static Marshal(data: CRefreshFriendInfos): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRefreshFriendInfos;