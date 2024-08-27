
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SReqCoinNum {
	money : [number,bigint][];
}

class SReqCoinNum {
    static DefaultData: SReqCoinNum = {
	money : [],
    }

    static Unmarshal(buffer: Buffer): SReqCoinNum { 
	const reader = new BufferReader(buffer)
try{
	const moneyLength = reader.readCompactUInt32();

	for (let i = 0; i < moneyLength; i++) {
	    SReqCoinNum.DefaultData.money.push([reader.readInt32(),reader.readInt64()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReqCoinNum.DefaultData);
    }

    static Marshal(data: SReqCoinNum): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.money).length);
	data.money.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt64(BigInt(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReqCoinNum;