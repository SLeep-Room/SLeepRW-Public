
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CMiniDiscountActivityInfo {
}

class CMiniDiscountActivityInfo {
    static DefaultData: CMiniDiscountActivityInfo = {
    }

    static Unmarshal(buffer: Buffer): CMiniDiscountActivityInfo { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CMiniDiscountActivityInfo.DefaultData);
    }

    static Marshal(data: CMiniDiscountActivityInfo): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CMiniDiscountActivityInfo;