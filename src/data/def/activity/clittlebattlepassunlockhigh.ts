
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CLittleBattlePassUnlockHigh {
}

class CLittleBattlePassUnlockHigh {
    static DefaultData: CLittleBattlePassUnlockHigh = {
    }

    static Unmarshal(buffer: Buffer): CLittleBattlePassUnlockHigh { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CLittleBattlePassUnlockHigh.DefaultData);
    }

    static Marshal(data: CLittleBattlePassUnlockHigh): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CLittleBattlePassUnlockHigh;