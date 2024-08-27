
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SWitchInAgainstBossUpLv {
	witchLv : number;
}

class SWitchInAgainstBossUpLv {
    static DefaultData: SWitchInAgainstBossUpLv = {
	witchLv : 0,
    }

    static Unmarshal(buffer: Buffer): SWitchInAgainstBossUpLv { 
	const reader = new BufferReader(buffer)
try{
	SWitchInAgainstBossUpLv.DefaultData.witchLv = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SWitchInAgainstBossUpLv.DefaultData);
    }

    static Marshal(data: SWitchInAgainstBossUpLv): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.witchLv)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SWitchInAgainstBossUpLv;