
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface EquipType {
}

class EquipType {
    static DefaultData: EquipType = {
    }

    static Unmarshal(buffer: BufferReader): EquipType { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},EquipType.DefaultData);
    }

    static Marshal(data: EquipType): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default EquipType;