
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SAddOverviewSkin {
	skinId : number;
}

class SAddOverviewSkin {
    static DefaultData: SAddOverviewSkin = {
	skinId : 0,
    }

    static Unmarshal(buffer: Buffer): SAddOverviewSkin { 
	const reader = new BufferReader(buffer)
try{
	SAddOverviewSkin.DefaultData.skinId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAddOverviewSkin.DefaultData);
    }

    static Marshal(data: SAddOverviewSkin): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.skinId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAddOverviewSkin;