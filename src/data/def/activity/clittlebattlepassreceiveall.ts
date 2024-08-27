
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CLittleBattlePassReceiveAll {
}

class CLittleBattlePassReceiveAll {
    static DefaultData: CLittleBattlePassReceiveAll = {
    }

    static Unmarshal(buffer: Buffer): CLittleBattlePassReceiveAll { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CLittleBattlePassReceiveAll.DefaultData);
    }

    static Marshal(data: CLittleBattlePassReceiveAll): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CLittleBattlePassReceiveAll;