
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChristmasSupport {
	num : number;
	addScore : number;
}

class SChristmasSupport {
    static DefaultData: SChristmasSupport = {
	num : 0,
	addScore : 0,
    }

    static Unmarshal(buffer: Buffer): SChristmasSupport { 
	const reader = new BufferReader(buffer)
try{
	SChristmasSupport.DefaultData.num = reader.readInt32()
	SChristmasSupport.DefaultData.addScore = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChristmasSupport.DefaultData);
    }

    static Marshal(data: SChristmasSupport): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.num)
	buffer.writeInt32(data.addScore)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChristmasSupport;