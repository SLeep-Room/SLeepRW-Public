
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Alchemy {
	id : number;
	buildLevel : number;
	alchemyLevel : number;
	alchemyStage : number;
	alchemyExperience : number;
	roleId : number;
}

class Alchemy {
    static DefaultData: Alchemy = {
	id : 0,
	buildLevel : 0,
	alchemyLevel : 0,
	alchemyStage : 0,
	alchemyExperience : 0,
	roleId : 0,
    }

    static Unmarshal(buffer: BufferReader): Alchemy { 
	const reader = buffer
try{
	Alchemy.DefaultData.id = reader.readInt32()
	Alchemy.DefaultData.buildLevel = reader.readInt32()
	Alchemy.DefaultData.alchemyLevel = reader.readInt32()
	Alchemy.DefaultData.alchemyStage = reader.readInt32()
	Alchemy.DefaultData.alchemyExperience = reader.readInt32()
	Alchemy.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Alchemy.DefaultData);
    }

    static Marshal(data: Alchemy): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.buildLevel)
	buffer.writeInt32(data.alchemyLevel)
	buffer.writeInt32(data.alchemyStage)
	buffer.writeInt32(data.alchemyExperience)
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Alchemy;