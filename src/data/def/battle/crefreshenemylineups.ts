
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRefreshEnemyLineups {
}

class CRefreshEnemyLineups {
    static DefaultData: CRefreshEnemyLineups = {
    }

    static Unmarshal(buffer: Buffer): CRefreshEnemyLineups { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRefreshEnemyLineups.DefaultData);
    }

    static Marshal(data: CRefreshEnemyLineups): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRefreshEnemyLineups;