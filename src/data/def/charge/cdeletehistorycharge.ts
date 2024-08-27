
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDeleteHistoryCharge {
	gameorderid : bigint;
	currentpage : number;
}

class CDeleteHistoryCharge {
    static DefaultData: CDeleteHistoryCharge = {
	gameorderid : 0n,
	currentpage : 0,
    }

    static Unmarshal(buffer: Buffer): CDeleteHistoryCharge { 
	const reader = new BufferReader(buffer)
try{
	CDeleteHistoryCharge.DefaultData.gameorderid = reader.readInt64()
	CDeleteHistoryCharge.DefaultData.currentpage = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDeleteHistoryCharge.DefaultData);
    }

    static Marshal(data: CDeleteHistoryCharge): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.gameorderid))
	buffer.writeInt32(data.currentpage)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDeleteHistoryCharge;