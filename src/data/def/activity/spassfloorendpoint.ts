
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import receiveItems from '../../bean/item/beans/iteminfo';

interface SPassFloorEndPoint {
	receiveItems : typeof receiveItems.DefaultData[];
}

class SPassFloorEndPoint {
    static DefaultData: SPassFloorEndPoint = {
	receiveItems : [],
    }

    static Unmarshal(buffer: Buffer): SPassFloorEndPoint { 
	const reader = new BufferReader(buffer)
try{
	const receiveItemsLength = reader.readCompactUInt32();

	for (let i = 0; i < receiveItemsLength; i++) {
	    SPassFloorEndPoint.DefaultData.receiveItems.push(receiveItems.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SPassFloorEndPoint.DefaultData);
    }

    static Marshal(data: SPassFloorEndPoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.receiveItems).length);
	data.receiveItems.forEach((value) => {
		buffer.writeBuffer(receiveItems.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SPassFloorEndPoint;