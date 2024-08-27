
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Hyperlink {
	userId : bigint;
	linkType : number;
	linkText : number;
}

class Hyperlink {
    static DefaultData: Hyperlink = {
	userId : 0n,
	linkType : 0,
	linkText : 0,
    }

    static Unmarshal(buffer: BufferReader): Hyperlink { 
	const reader = buffer
try{
	Hyperlink.DefaultData.userId = reader.readInt64()
	Hyperlink.DefaultData.linkType = reader.readInt32()
	Hyperlink.DefaultData.linkText = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Hyperlink.DefaultData);
    }

    static Marshal(data: Hyperlink): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))
	buffer.writeInt32(data.linkType)
	buffer.writeInt32(data.linkText)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Hyperlink;