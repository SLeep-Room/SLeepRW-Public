
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetEnemyLineups {
}

class CGetEnemyLineups {
    static DefaultData: CGetEnemyLineups = {
    }

    static Unmarshal(buffer: Buffer): CGetEnemyLineups { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetEnemyLineups.DefaultData);
    }

    static Marshal(data: CGetEnemyLineups): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetEnemyLineups;