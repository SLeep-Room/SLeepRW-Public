
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAlchemyRankLevelUp {
}

class CAlchemyRankLevelUp {
    static DefaultData: CAlchemyRankLevelUp = {
    }

    static Unmarshal(buffer: Buffer): CAlchemyRankLevelUp { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAlchemyRankLevelUp.DefaultData);
    }

    static Marshal(data: CAlchemyRankLevelUp): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAlchemyRankLevelUp;