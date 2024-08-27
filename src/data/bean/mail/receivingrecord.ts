
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface ReceivingRecord {
	receivingTime : bigint;
	awards : [number,number][];
}

class ReceivingRecord {
    static DefaultData: ReceivingRecord = {
	receivingTime : 0n,
	awards : [],
    }

    static Unmarshal(buffer: BufferReader): ReceivingRecord { 
	const reader = buffer
try{
	ReceivingRecord.DefaultData.receivingTime = reader.readInt64()
	const awardsLength = reader.readCompactUInt32();

	for (let i = 0; i < awardsLength; i++) {
	    ReceivingRecord.DefaultData.awards.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ReceivingRecord.DefaultData);
    }

    static Marshal(data: ReceivingRecord): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.receivingTime))
	buffer.writeCompactInt32(Object.keys(data.awards).length);
	data.awards.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ReceivingRecord;