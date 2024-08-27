
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface RankType {
}

class RankType {
    static DefaultData: RankType = {
    }

    static Unmarshal(buffer: BufferReader): RankType { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},RankType.DefaultData);
    }

    static Marshal(data: RankType): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default RankType;