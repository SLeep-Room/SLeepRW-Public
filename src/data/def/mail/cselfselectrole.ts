
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSelfSelectRole {
	mailKey : bigint;
	select : number;
}

class CSelfSelectRole {
    static DefaultData: CSelfSelectRole = {
	mailKey : 0n,
	select : 0,
    }

    static Unmarshal(buffer: Buffer): CSelfSelectRole { 
	const reader = new BufferReader(buffer)
try{
	CSelfSelectRole.DefaultData.mailKey = reader.readInt64()
	CSelfSelectRole.DefaultData.select = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSelfSelectRole.DefaultData);
    }

    static Marshal(data: CSelfSelectRole): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.mailKey))
	buffer.writeInt32(data.select)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSelfSelectRole;