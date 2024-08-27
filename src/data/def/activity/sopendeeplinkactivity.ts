
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenDeepLinkActivity {
}

class SOpenDeepLinkActivity {
    static DefaultData: SOpenDeepLinkActivity = {
    }

    static Unmarshal(buffer: Buffer): SOpenDeepLinkActivity { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenDeepLinkActivity.DefaultData);
    }

    static Marshal(data: SOpenDeepLinkActivity): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenDeepLinkActivity;