
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface LineupStation {
}

class LineupStation {
    static DefaultData: LineupStation = {
    }

    static Unmarshal(buffer: BufferReader): LineupStation { 
	const reader = buffer
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},LineupStation.DefaultData);
    }

    static Marshal(data: LineupStation): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default LineupStation;