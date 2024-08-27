
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SForbidLogin {
	restTime : bigint;
}

class SForbidLogin {
    static DefaultData: SForbidLogin = {
	restTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SForbidLogin { 
	const reader = new BufferReader(buffer)
try{
	SForbidLogin.DefaultData.restTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SForbidLogin.DefaultData);
    }

    static Marshal(data: SForbidLogin): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.restTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SForbidLogin;