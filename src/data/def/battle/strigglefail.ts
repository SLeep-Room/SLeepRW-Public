
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface STriggleFail {
	eventId : number;
}

class STriggleFail {
    static DefaultData: STriggleFail = {
	eventId : 0,
    }

    static Unmarshal(buffer: Buffer): STriggleFail { 
	const reader = new BufferReader(buffer)
try{
	STriggleFail.DefaultData.eventId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},STriggleFail.DefaultData);
    }

    static Marshal(data: STriggleFail): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.eventId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default STriggleFail;