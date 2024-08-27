
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAlarm {
	context : string;
}

class CAlarm {
    static DefaultData: CAlarm = {
	context : "",
    }

    static Unmarshal(buffer: Buffer): CAlarm { 
	const reader = new BufferReader(buffer)
try{
	CAlarm.DefaultData.context = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAlarm.DefaultData);
    }

    static Marshal(data: CAlarm): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.context)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAlarm;