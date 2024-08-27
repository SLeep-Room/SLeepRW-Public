
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface RankVersion {
}

class RankVersion {
    static DefaultData: RankVersion = {
    }

    static Unmarshal(buffer: BufferReader): RankVersion { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},RankVersion.DefaultData);
    }

    static Marshal(data: RankVersion): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default RankVersion;