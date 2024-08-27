
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeUserLikedNum {
	likedNum : number;
}

class SChangeUserLikedNum {
    static DefaultData: SChangeUserLikedNum = {
	likedNum : 0,
    }

    static Unmarshal(buffer: Buffer): SChangeUserLikedNum { 
	const reader = new BufferReader(buffer)
try{
	SChangeUserLikedNum.DefaultData.likedNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeUserLikedNum.DefaultData);
    }

    static Marshal(data: SChangeUserLikedNum): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.likedNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeUserLikedNum;