
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface DungeonType {
}

class DungeonType {
    static DefaultData: DungeonType = {
    }

    static Unmarshal(buffer: BufferReader): DungeonType { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},DungeonType.DefaultData);
    }

    static Marshal(data: DungeonType): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default DungeonType;