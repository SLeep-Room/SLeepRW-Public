
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import records from '../../bean/battle/exploreawardrecord';

interface SRecordExploreAward {
	records : typeof records.DefaultData[];
}

class SRecordExploreAward {
    static DefaultData: SRecordExploreAward = {
	records : [],
    }

    static Unmarshal(buffer: Buffer): SRecordExploreAward { 
	const reader = new BufferReader(buffer)
try{
	const recordsLength = reader.readCompactUInt32();

	for (let i = 0; i < recordsLength; i++) {
	    SRecordExploreAward.DefaultData.records.push(records.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRecordExploreAward.DefaultData);
    }

    static Marshal(data: SRecordExploreAward): Buffer { 
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


export default SRecordExploreAward;