
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChristmasBossTimes {
	times : number;
}

class SChristmasBossTimes {
    static DefaultData: SChristmasBossTimes = {
	times : 0,
    }

    static Unmarshal(buffer: Buffer): SChristmasBossTimes { 
	const reader = new BufferReader(buffer)
try{
	SChristmasBossTimes.DefaultData.times = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChristmasBossTimes.DefaultData);
    }

    static Marshal(data: SChristmasBossTimes): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.times)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChristmasBossTimes;