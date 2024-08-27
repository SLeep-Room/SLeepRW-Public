
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import data from '../../bean/item/beans/item';

interface SAddItem {
	bagType : number;
	data : typeof data.DefaultData[];
}

class SAddItem {
    static DefaultData: SAddItem = {
	bagType : 0,
	data : [],
    }

    static Unmarshal(buffer: Buffer): SAddItem { 
	const reader = new BufferReader(buffer)
try{
	SAddItem.DefaultData.bagType = reader.readInt32()
	const dataLength = reader.readCompactUInt32();

	for (let i = 0; i < dataLength; i++) {
	    SAddItem.DefaultData.data.push(data.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAddItem.DefaultData);
    }

    static Marshal(data1: SAddItem): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data1.bagType)
	buffer.writeCompactInt32(Object.keys(data1.data).length);
	data1.data.forEach((value) => {
		buffer.writeBuffer(data.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAddItem;