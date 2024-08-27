
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGameLogin {
}

class SGameLogin {
    static DefaultData: SGameLogin = {
    }

    static Unmarshal(buffer: Buffer): SGameLogin { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGameLogin.DefaultData);
    }

    static Marshal(data: SGameLogin): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGameLogin;