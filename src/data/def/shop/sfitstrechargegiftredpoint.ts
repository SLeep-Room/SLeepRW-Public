
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SFitstRechargeGiftRedPoint {
}

class SFitstRechargeGiftRedPoint {
    static DefaultData: SFitstRechargeGiftRedPoint = {
    }

    static Unmarshal(buffer: Buffer): SFitstRechargeGiftRedPoint { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SFitstRechargeGiftRedPoint.DefaultData);
    }

    static Marshal(data: SFitstRechargeGiftRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SFitstRechargeGiftRedPoint;