
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOldPlayerWelfare {
	isPay : number;
	totalSignNum : number;
	endTime : bigint;
	commonReceiveList : number[];
	highReceiveList : number[];
}

class SOldPlayerWelfare {
    static DefaultData: SOldPlayerWelfare = {
	isPay : 0,
	totalSignNum : 0,
	endTime : 0n,
	commonReceiveList : [],
	highReceiveList : [],
    }

    static Unmarshal(buffer: Buffer): SOldPlayerWelfare { 
	const reader = new BufferReader(buffer)
try{
	SOldPlayerWelfare.DefaultData.isPay = reader.readInt32()
	SOldPlayerWelfare.DefaultData.totalSignNum = reader.readInt32()
	SOldPlayerWelfare.DefaultData.endTime = reader.readInt64()
	const commonReceiveListLength = reader.readCompactUInt32();

	for (let i = 0; i < commonReceiveListLength; i++) {
	    SOldPlayerWelfare.DefaultData.commonReceiveList.push(reader.readInt32());
	}
	const highReceiveListLength = reader.readCompactUInt32();

	for (let i = 0; i < highReceiveListLength; i++) {
	    SOldPlayerWelfare.DefaultData.highReceiveList.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOldPlayerWelfare.DefaultData);
    }

    static Marshal(data: SOldPlayerWelfare): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.isPay)
	buffer.writeInt32(data.totalSignNum)
	buffer.writeInt64(BigInt(data.endTime))
	buffer.writeCompactInt32(Object.keys(data.commonReceiveList).length);
	data.commonReceiveList.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.highReceiveList).length);
	data.highReceiveList.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOldPlayerWelfare;