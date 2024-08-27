
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRefreshPumpkin {
}

class CRefreshPumpkin {
    static DefaultData: CRefreshPumpkin = {
    }

    static Unmarshal(buffer: Buffer): CRefreshPumpkin { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRefreshPumpkin.DefaultData);
    }

    static Marshal(data: CRefreshPumpkin): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRefreshPumpkin;