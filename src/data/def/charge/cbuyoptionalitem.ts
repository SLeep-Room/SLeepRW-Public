
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBuyOptionalItem {
	goodId : number;
	option : number[];
}

class CBuyOptionalItem {
    static DefaultData: CBuyOptionalItem = {
	goodId : 0,
	option : [],
    }

    static Unmarshal(buffer: Buffer): CBuyOptionalItem { 
	const reader = new BufferReader(buffer)
try{
	CBuyOptionalItem.DefaultData.goodId = reader.readInt32()
	const optionLength = reader.readCompactUInt32();

	for (let i = 0; i < optionLength; i++) {
	    CBuyOptionalItem.DefaultData.option.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBuyOptionalItem.DefaultData);
    }

    static Marshal(data: CBuyOptionalItem): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.goodId)
	buffer.writeCompactInt32(Object.keys(data.option).length);
	data.option.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBuyOptionalItem;