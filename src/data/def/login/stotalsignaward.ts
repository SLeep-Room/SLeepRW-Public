
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import awards from '../../bean/item/beans/iteminfo';

interface STotalSignAward {
	day : number;
	success : number;
	awards : typeof awards.DefaultData[];
}

class STotalSignAward {
    static DefaultData: STotalSignAward = {
	day : 0,
	success : 0,
	awards : [],
    }

    static Unmarshal(buffer: Buffer): STotalSignAward { 
	const reader = new BufferReader(buffer)
try{
	STotalSignAward.DefaultData.day = reader.readInt32()
	STotalSignAward.DefaultData.success = reader.readInt32()
	const awardsLength = reader.readCompactUInt32();

	for (let i = 0; i < awardsLength; i++) {
	    STotalSignAward.DefaultData.awards.push(awards.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},STotalSignAward.DefaultData);
    }

    static Marshal(data: STotalSignAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.day)
	buffer.writeInt32(data.success)
	buffer.writeCompactInt32(Object.keys(data.awards).length);
	data.awards.forEach((value) => {
		buffer.writeBuffer(awards.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default STotalSignAward;