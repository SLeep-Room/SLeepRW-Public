
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRefreshShopHomepage {
}

class CRefreshShopHomepage {
    static DefaultData: CRefreshShopHomepage = {
    }

    static Unmarshal(buffer: Buffer): CRefreshShopHomepage { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRefreshShopHomepage.DefaultData);
    }

    static Marshal(data: CRefreshShopHomepage): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRefreshShopHomepage;