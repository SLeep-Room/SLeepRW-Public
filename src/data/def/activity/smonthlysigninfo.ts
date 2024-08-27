
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SMonthlySignInfo {
	month : number;
	days : number;
	complementNum : number;
	receivedAward : number[];
	monthDay : [number,number][];
}

class SMonthlySignInfo {
    static DefaultData: SMonthlySignInfo = {
	month : 0,
	days : 0,
	complementNum : 0,
	receivedAward : [],
	monthDay : [],
    }

    static Unmarshal(buffer: Buffer): SMonthlySignInfo { 
	const reader = new BufferReader(buffer)
try{
	SMonthlySignInfo.DefaultData.month = reader.readInt32()
	SMonthlySignInfo.DefaultData.days = reader.readInt32()
	SMonthlySignInfo.DefaultData.complementNum = reader.readInt32()
	const receivedAwardLength = reader.readCompactUInt32();

	for (let i = 0; i < receivedAwardLength; i++) {
	    SMonthlySignInfo.DefaultData.receivedAward.push(reader.readInt32());
	}
	const monthDayLength = reader.readCompactUInt32();

	for (let i = 0; i < monthDayLength; i++) {
	    SMonthlySignInfo.DefaultData.monthDay.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SMonthlySignInfo.DefaultData);
    }

    static Marshal(data: SMonthlySignInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.month)
	buffer.writeInt32(data.days)
	buffer.writeInt32(data.complementNum)
	buffer.writeCompactInt32(Object.keys(data.receivedAward).length);
	data.receivedAward.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.monthDay).length);
	data.monthDay.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SMonthlySignInfo;