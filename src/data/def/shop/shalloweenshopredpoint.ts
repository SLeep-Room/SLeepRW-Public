
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SHalloweenShopRedPoint {
}

class SHalloweenShopRedPoint {
    static DefaultData: SHalloweenShopRedPoint = {
    }

    static Unmarshal(buffer: Buffer): SHalloweenShopRedPoint { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SHalloweenShopRedPoint.DefaultData);
    }

    static Marshal(data: SHalloweenShopRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SHalloweenShopRedPoint;