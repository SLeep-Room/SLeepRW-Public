
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CWeekBossTalent {
}

class CWeekBossTalent {
    static DefaultData: CWeekBossTalent = {
    }

    static Unmarshal(buffer: Buffer): CWeekBossTalent { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CWeekBossTalent.DefaultData);
    }

    static Marshal(data: CWeekBossTalent): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CWeekBossTalent;