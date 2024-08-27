
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CWitchInAgainstBossUpLv {
}

class CWitchInAgainstBossUpLv {
    static DefaultData: CWitchInAgainstBossUpLv = {
    }

    static Unmarshal(buffer: Buffer): CWitchInAgainstBossUpLv { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CWitchInAgainstBossUpLv.DefaultData);
    }

    static Marshal(data: CWitchInAgainstBossUpLv): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CWitchInAgainstBossUpLv;