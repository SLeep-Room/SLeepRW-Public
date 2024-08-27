
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendEmojiInfo {
	hadEmoji : number[];
}

class SSendEmojiInfo {
    static DefaultData: SSendEmojiInfo = {
	hadEmoji : [],
    }

    static Unmarshal(buffer: Buffer): SSendEmojiInfo { 
	const reader = new BufferReader(buffer)
try{
	const hadEmojiLength = reader.readCompactUInt32();

	for (let i = 0; i < hadEmojiLength; i++) {
	    SSendEmojiInfo.DefaultData.hadEmoji.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendEmojiInfo.DefaultData);
    }

    static Marshal(data: SSendEmojiInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.hadEmoji).length);
	data.hadEmoji.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendEmojiInfo;