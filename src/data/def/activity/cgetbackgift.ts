
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetBackGift {
	goodId : number;
}

class CGetBackGift {
    static DefaultData: CGetBackGift = {
	goodId : 0,
    }

    static Unmarshal(buffer: Buffer): CGetBackGift { 
	const reader = new BufferReader(buffer)
try{
	CGetBackGift.DefaultData.goodId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetBackGift.DefaultData);
    }

    static Marshal(data: CGetBackGift): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.goodId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetBackGift;