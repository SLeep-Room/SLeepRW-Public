
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendHeadInfo {
	avatars : [number,number][];
	frames : [number,number][];
}

class SSendHeadInfo {
    static DefaultData: SSendHeadInfo = {
	avatars : [],
	frames : [],
    }

    static Unmarshal(buffer: Buffer): SSendHeadInfo { 
	const reader = new BufferReader(buffer)
try{
	const avatarsLength = reader.readCompactUInt32();

	for (let i = 0; i < avatarsLength; i++) {
	    SSendHeadInfo.DefaultData.avatars.push([reader.readInt32(),reader.readInt32()]);
	}
	const framesLength = reader.readCompactUInt32();

	for (let i = 0; i < framesLength; i++) {
	    SSendHeadInfo.DefaultData.frames.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendHeadInfo.DefaultData);
    }

    static Marshal(data: SSendHeadInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.avatars).length);
	data.avatars.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.frames).length);
	data.frames.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendHeadInfo;