
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetSummerConstructionUpdateList {
}

class CGetSummerConstructionUpdateList {
    static DefaultData: CGetSummerConstructionUpdateList = {
    }

    static Unmarshal(buffer: Buffer): CGetSummerConstructionUpdateList { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetSummerConstructionUpdateList.DefaultData);
    }

    static Marshal(data: CGetSummerConstructionUpdateList): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetSummerConstructionUpdateList;