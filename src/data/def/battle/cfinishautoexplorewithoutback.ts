
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CFinishAutoExploreWithoutBack {
}

class CFinishAutoExploreWithoutBack {
    static DefaultData: CFinishAutoExploreWithoutBack = {
    }

    static Unmarshal(buffer: Buffer): CFinishAutoExploreWithoutBack { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CFinishAutoExploreWithoutBack.DefaultData);
    }

    static Marshal(data: CFinishAutoExploreWithoutBack): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CFinishAutoExploreWithoutBack;