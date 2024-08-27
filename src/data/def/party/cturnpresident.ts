
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CTurnPresident {
	partyId : bigint;
	userId : bigint;
}

class CTurnPresident {
    static DefaultData: CTurnPresident = {
	partyId : 0n,
	userId : 0n,
    }

    static Unmarshal(buffer: Buffer): CTurnPresident { 
	const reader = new BufferReader(buffer)
try{
	CTurnPresident.DefaultData.partyId = reader.readInt64()
	CTurnPresident.DefaultData.userId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CTurnPresident.DefaultData);
    }

    static Marshal(data: CTurnPresident): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.partyId))
	buffer.writeInt64(BigInt(data.userId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CTurnPresident;