
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSettleChristmasSupport {
	state : number;
	settle : number;
}

class SSettleChristmasSupport {
    static DefaultData: SSettleChristmasSupport = {
	state : 0,
	settle : 0,
    }

    static Unmarshal(buffer: Buffer): SSettleChristmasSupport { 
	const reader = new BufferReader(buffer)
try{
	SSettleChristmasSupport.DefaultData.state = reader.readInt32()
	SSettleChristmasSupport.DefaultData.settle = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSettleChristmasSupport.DefaultData);
    }

    static Marshal(data: SSettleChristmasSupport): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)
	buffer.writeInt32(data.settle)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSettleChristmasSupport;