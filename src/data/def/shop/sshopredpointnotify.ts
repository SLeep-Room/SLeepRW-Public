
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SShopRedpointNotify {
	redPointList : number[];
	freeRedPointList : number[];
}

class SShopRedpointNotify {
    static DefaultData: SShopRedpointNotify = {
	redPointList : [],
	freeRedPointList : [],
    }

    static Unmarshal(buffer: Buffer): SShopRedpointNotify { 
	const reader = new BufferReader(buffer)
try{
	const redPointListLength = reader.readCompactUInt32();

	for (let i = 0; i < redPointListLength; i++) {
	    SShopRedpointNotify.DefaultData.redPointList.push(reader.readInt32());
	}
	const freeRedPointListLength = reader.readCompactUInt32();

	for (let i = 0; i < freeRedPointListLength; i++) {
	    SShopRedpointNotify.DefaultData.freeRedPointList.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SShopRedpointNotify.DefaultData);
    }

    static Marshal(data: SShopRedpointNotify): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.redPointList).length);
	data.redPointList.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.freeRedPointList).length);
	data.freeRedPointList.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SShopRedpointNotify;