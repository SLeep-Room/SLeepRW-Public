
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface InterActiveObj {
	id : number;
	state : number;
}

class InterActiveObj {
    static DefaultData: InterActiveObj = {
	id : 0,
	state : 0,
    }

    static Unmarshal(buffer: BufferReader): InterActiveObj { 
	const reader = buffer
try{
	InterActiveObj.DefaultData.id = reader.readInt32()
	InterActiveObj.DefaultData.state = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},InterActiveObj.DefaultData);
    }

    static Marshal(data: InterActiveObj): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.state)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default InterActiveObj;