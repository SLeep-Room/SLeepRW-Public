
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SNeed2RenewShatteredZones {
}

class SNeed2RenewShatteredZones {
    static DefaultData: SNeed2RenewShatteredZones = {
    }

    static Unmarshal(buffer: Buffer): SNeed2RenewShatteredZones { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SNeed2RenewShatteredZones.DefaultData);
    }

    static Marshal(data: SNeed2RenewShatteredZones): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SNeed2RenewShatteredZones;