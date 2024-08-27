
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRefreshDeepLink {
}

class CRefreshDeepLink {
    static DefaultData: CRefreshDeepLink = {
    }

    static Unmarshal(buffer: Buffer): CRefreshDeepLink { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRefreshDeepLink.DefaultData);
    }

    static Marshal(data: CRefreshDeepLink): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRefreshDeepLink;