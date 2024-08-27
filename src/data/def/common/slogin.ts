
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SLogin {
	userid : bigint;
	token : string;
	needActive : number;
	serverId : number;
}

class SLogin {
    static DefaultData: SLogin = {
	userid : 0n,
	token : "",
	needActive : 0,
	serverId : 0,
    }

    static Unmarshal(buffer: Buffer): SLogin { 
	const reader = new BufferReader(buffer)
try{
	SLogin.DefaultData.userid = reader.readInt64()
	SLogin.DefaultData.token = reader.readString()
	SLogin.DefaultData.needActive = reader.readInt32()
	SLogin.DefaultData.serverId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLogin.DefaultData);
    }

    static Marshal(data: SLogin): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userid))
	buffer.writeString(data.token)
	buffer.writeInt32(data.needActive)
	buffer.writeInt32(data.serverId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLogin;