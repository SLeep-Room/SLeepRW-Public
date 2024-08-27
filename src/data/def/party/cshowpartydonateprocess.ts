
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CShowPartyDonateProcess {
}

class CShowPartyDonateProcess {
    static DefaultData: CShowPartyDonateProcess = {
    }

    static Unmarshal(buffer: Buffer): CShowPartyDonateProcess { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CShowPartyDonateProcess.DefaultData);
    }

    static Marshal(data: CShowPartyDonateProcess): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CShowPartyDonateProcess;