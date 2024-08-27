
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import cavern from '../../bean/yard/cavern';

interface SRefreshCavern {
	cavern : typeof cavern.DefaultData;
}

class SRefreshCavern {
    static DefaultData: SRefreshCavern = {
	cavern : cavern.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SRefreshCavern { 
	const reader = new BufferReader(buffer)
try{
	SRefreshCavern.DefaultData.cavern = cavern.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshCavern.DefaultData);
    }

    static Marshal(data: SRefreshCavern): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(cavern.Marshal(data.cavern))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshCavern;