
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import items from '../../bean/item/beans/item';

interface Attachment {
	items : typeof items.DefaultData[];
}

class Attachment {
    static DefaultData: Attachment = {
	items : [],
    }

    static Unmarshal(buffer: BufferReader): Attachment { 
	const reader = buffer
try{
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    Attachment.DefaultData.items.push(items.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Attachment.DefaultData);
    }

    static Marshal(data: Attachment): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach((value) => {
		buffer.writeBuffer(items.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Attachment;