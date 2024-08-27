
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SFreeLevelGiftIcon {
}

class SFreeLevelGiftIcon {
    static DefaultData: SFreeLevelGiftIcon = {
    }

    static Unmarshal(buffer: Buffer): SFreeLevelGiftIcon { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SFreeLevelGiftIcon.DefaultData);
    }

    static Marshal(data: SFreeLevelGiftIcon): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SFreeLevelGiftIcon;