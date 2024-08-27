
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAppointVicePresident {
	partyId : bigint;
	userId : bigint;
	operate : number;
}

class CAppointVicePresident {
    static DefaultData: CAppointVicePresident = {
	partyId : 0n,
	userId : 0n,
	operate : 0,
    }

    static Unmarshal(buffer: Buffer): CAppointVicePresident { 
	const reader = new BufferReader(buffer)
try{
	CAppointVicePresident.DefaultData.partyId = reader.readInt64()
	CAppointVicePresident.DefaultData.userId = reader.readInt64()
	CAppointVicePresident.DefaultData.operate = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAppointVicePresident.DefaultData);
    }

    static Marshal(data: CAppointVicePresident): Buffer { 
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


export default CAppointVicePresident;