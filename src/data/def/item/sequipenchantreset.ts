
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SEquipEnchantReset {
}

class SEquipEnchantReset {
    static DefaultData: SEquipEnchantReset = {
    }

    static Unmarshal(buffer: Buffer): SEquipEnchantReset { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SEquipEnchantReset.DefaultData);
    }

    static Marshal(data: SEquipEnchantReset): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SEquipEnchantReset;