
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUseGiftKey {
	giftkey : string;
}

class CUseGiftKey {
    static DefaultData: CUseGiftKey = {
	giftkey : "",
    }

    static Unmarshal(buffer: Buffer): CUseGiftKey { 
	const reader = new BufferReader(buffer)
try{
	CUseGiftKey.DefaultData.giftkey = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUseGiftKey.DefaultData);
    }

    static Marshal(data: CUseGiftKey): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.giftkey)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUseGiftKey;