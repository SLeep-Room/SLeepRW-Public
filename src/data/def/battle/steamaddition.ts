
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface STeamAddition {
}

class STeamAddition {
    static DefaultData: STeamAddition = {
    }

    static Unmarshal(buffer: Buffer): STeamAddition { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},STeamAddition.DefaultData);
    }

    static Marshal(data: STeamAddition): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default STeamAddition;