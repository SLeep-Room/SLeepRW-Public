
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRefreshCardUI {
}

class CRefreshCardUI {
    static DefaultData: CRefreshCardUI = {
    }

    static Unmarshal(buffer: Buffer): CRefreshCardUI { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRefreshCardUI.DefaultData);
    }

    static Marshal(data: CRefreshCardUI): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRefreshCardUI;