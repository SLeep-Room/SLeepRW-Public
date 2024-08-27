
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSpringBossState {
}

class CSpringBossState {
    static DefaultData: CSpringBossState = {
    }

    static Unmarshal(buffer: Buffer): CSpringBossState { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSpringBossState.DefaultData);
    }

    static Marshal(data: CSpringBossState): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSpringBossState;