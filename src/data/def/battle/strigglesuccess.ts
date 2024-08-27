
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface STriggleSuccess {
	eventId : number;
}

class STriggleSuccess {
    static DefaultData: STriggleSuccess = {
	eventId : 0,
    }

    static Unmarshal(buffer: Buffer): STriggleSuccess { 
	const reader = new BufferReader(buffer)
try{
	STriggleSuccess.DefaultData.eventId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},STriggleSuccess.DefaultData);
    }

    static Marshal(data: STriggleSuccess): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.eventId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default STriggleSuccess;