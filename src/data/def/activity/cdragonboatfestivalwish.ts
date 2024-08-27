
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDragonBoatFestivalWish {
}

class CDragonBoatFestivalWish {
    static DefaultData: CDragonBoatFestivalWish = {
    }

    static Unmarshal(buffer: Buffer): CDragonBoatFestivalWish { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDragonBoatFestivalWish.DefaultData);
    }

    static Marshal(data: CDragonBoatFestivalWish): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDragonBoatFestivalWish;