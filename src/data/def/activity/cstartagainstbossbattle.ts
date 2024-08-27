
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CStartAgainstBossBattle {
}

class CStartAgainstBossBattle {
    static DefaultData: CStartAgainstBossBattle = {
    }

    static Unmarshal(buffer: Buffer): CStartAgainstBossBattle { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CStartAgainstBossBattle.DefaultData);
    }

    static Marshal(data: CStartAgainstBossBattle): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CStartAgainstBossBattle;