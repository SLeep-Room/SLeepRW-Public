
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface PassiveSkill {
	id : number;
	lock : number;
}

class PassiveSkill {
    static DefaultData: PassiveSkill = {
	id : 0,
	lock : 0,
    }

    static Unmarshal(buffer: BufferReader): PassiveSkill { 
	const reader = buffer
try{
	PassiveSkill.DefaultData.id = reader.readInt32()
	PassiveSkill.DefaultData.lock = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},PassiveSkill.DefaultData);
    }

    static Marshal(data: PassiveSkill): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.lock)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default PassiveSkill;