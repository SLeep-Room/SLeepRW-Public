
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SEchoShopRedPoint {
}

class SEchoShopRedPoint {
    static DefaultData: SEchoShopRedPoint = {
    }

    static Unmarshal(buffer: Buffer): SEchoShopRedPoint { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SEchoShopRedPoint.DefaultData);
    }

    static Marshal(data: SEchoShopRedPoint): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SEchoShopRedPoint;