
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAppointCream {
	partyId : bigint;
	userId : bigint;
	operate : number;
}

class CAppointCream {
    static DefaultData: CAppointCream = {
	partyId : 0n,
	userId : 0n,
	operate : 0,
    }

    static Unmarshal(buffer: Buffer): CAppointCream { 
	const reader = new BufferReader(buffer)
try{
	CAppointCream.DefaultData.partyId = reader.readInt64()
	CAppointCream.DefaultData.userId = reader.readInt64()
	CAppointCream.DefaultData.operate = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAppointCream.DefaultData);
    }

    static Marshal(data: CAppointCream): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
	buffer.writeInt64(BigInt(data.userId))
	buffer.writeInt32(data.operate)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAppointCream;