
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Status {
	leftHp : number;
	monsterId : number;
	skillId : number;
}

class Status {
    static DefaultData: Status = {
	leftHp : 0,
	monsterId : 0,
	skillId : 0,
    }

    static Unmarshal(buffer: BufferReader): Status { 
	const reader = buffer
try{
	Status.DefaultData.leftHp = reader.readInt32()
	Status.DefaultData.monsterId = reader.readInt32()
	Status.DefaultData.skillId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Status.DefaultData);
    }

    static Marshal(data: Status): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.leftHp)
	buffer.writeInt32(data.monsterId)
	buffer.writeInt32(data.skillId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Status;