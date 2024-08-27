
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenFoolsCopyBattle {
}

class COpenFoolsCopyBattle {
    static DefaultData: COpenFoolsCopyBattle = {
    }

    static Unmarshal(buffer: Buffer): COpenFoolsCopyBattle { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenFoolsCopyBattle.DefaultData);
    }

    static Marshal(data: COpenFoolsCopyBattle): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenFoolsCopyBattle;