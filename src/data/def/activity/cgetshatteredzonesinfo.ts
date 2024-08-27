
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetShatteredZonesInfo {
}

class CGetShatteredZonesInfo {
    static DefaultData: CGetShatteredZonesInfo = {
    }

    static Unmarshal(buffer: Buffer): CGetShatteredZonesInfo { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetShatteredZonesInfo.DefaultData);
    }

    static Marshal(data: CGetShatteredZonesInfo): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetShatteredZonesInfo;