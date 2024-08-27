
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SAlarm {
	result : number;
}

class SAlarm {
    static DefaultData: SAlarm = {
	result : 0,
    }

    static Unmarshal(buffer: Buffer): SAlarm { 
	const reader = new BufferReader(buffer)
try{
	SAlarm.DefaultData.result = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAlarm.DefaultData);
    }

    static Marshal(data: SAlarm): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAlarm;