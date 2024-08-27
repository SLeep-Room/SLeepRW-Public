
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SMonthSignInfo {
	signTotalNum : number;
	receives : number[];
}

class SMonthSignInfo {
    static DefaultData: SMonthSignInfo = {
	signTotalNum : 0,
	receives : [],
    }

    static Unmarshal(buffer: Buffer): SMonthSignInfo { 
	const reader = new BufferReader(buffer)
try{
	SMonthSignInfo.DefaultData.signTotalNum = reader.readInt32()
	const receivesLength = reader.readCompactUInt32();

	for (let i = 0; i < receivesLength; i++) {
	    SMonthSignInfo.DefaultData.receives.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SMonthSignInfo.DefaultData);
    }

    static Marshal(data: SMonthSignInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.signTotalNum)
	buffer.writeCompactInt32(Object.keys(data.receives).length);
	data.receives.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SMonthSignInfo;