
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import records from '../../bean/mail/receivingrecord';

interface SSendReceivingRecords {
	records : typeof records.DefaultData[];
}

class SSendReceivingRecords {
    static DefaultData: SSendReceivingRecords = {
	records : [],
    }

    static Unmarshal(buffer: Buffer): SSendReceivingRecords { 
	const reader = new BufferReader(buffer)
try{
	const recordsLength = reader.readCompactUInt32();

	for (let i = 0; i < recordsLength; i++) {
	    SSendReceivingRecords.DefaultData.records.push(records.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendReceivingRecords.DefaultData);
    }

    static Marshal(data: SSendReceivingRecords): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.records).length);
	data.records.forEach((value) => {
		buffer.writeBuffer(records.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendReceivingRecords;