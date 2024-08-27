
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGetBuffInfo {
	buffIds : [number,number][];
}

class SGetBuffInfo {
    static DefaultData: SGetBuffInfo = {
	buffIds : [],
    }

    static Unmarshal(buffer: Buffer): SGetBuffInfo { 
	const reader = new BufferReader(buffer)
try{
	const buffIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < buffIdsLength; i++) {
	    SGetBuffInfo.DefaultData.buffIds.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetBuffInfo.DefaultData);
    }

    static Marshal(data: SGetBuffInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.buffIds).length);
	data.buffIds.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetBuffInfo;