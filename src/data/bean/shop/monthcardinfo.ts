
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface MonthCardInfo {
	remainTime : bigint;
	endTime : string;
}

class MonthCardInfo {
    static DefaultData: MonthCardInfo = {
	remainTime : 0n,
	endTime : "",
    }

    static Unmarshal(buffer: BufferReader): MonthCardInfo { 
	const reader = buffer
try{
	MonthCardInfo.DefaultData.remainTime = reader.readInt64()
	MonthCardInfo.DefaultData.endTime = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},MonthCardInfo.DefaultData);
    }

    static Marshal(data: MonthCardInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.remainTime))
	buffer.writeString(data.endTime)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default MonthCardInfo;