
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CFetchInvestAward {
}

class CFetchInvestAward {
    static DefaultData: CFetchInvestAward = {
    }

    static Unmarshal(buffer: Buffer): CFetchInvestAward { 
	const reader = new BufferReader(buffer)
try{} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CFetchInvestAward.DefaultData);
    }

    static Marshal(data: CFetchInvestAward): Buffer { 
	const buffer=new BufferWriter();
try{} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CFetchInvestAward;