
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface EffectType {
}

class EffectType {
    static DefaultData: EffectType = {
    }

    static Unmarshal(buffer: BufferReader): EffectType { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},EffectType.DefaultData);
    }

    static Marshal(data: EffectType): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default EffectType;