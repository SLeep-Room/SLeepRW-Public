
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGetDisplayRoomInfo {
	masks : [number,number][];
}

class SGetDisplayRoomInfo {
    static DefaultData: SGetDisplayRoomInfo = {
	masks : [],
    }

    static Unmarshal(buffer: Buffer): SGetDisplayRoomInfo { 
	const reader = new BufferReader(buffer)
try{
	const masksLength = reader.readCompactUInt32();

	for (let i = 0; i < masksLength; i++) {
	    SGetDisplayRoomInfo.DefaultData.masks.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetDisplayRoomInfo.DefaultData);
    }

    static Marshal(data: SGetDisplayRoomInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.masks).length);
	data.masks.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetDisplayRoomInfo;