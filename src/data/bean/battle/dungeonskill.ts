
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface DungeonSkill {
	id : number;
	lefttimes : number;
	lefttime : number;
}

class DungeonSkill {
    static DefaultData: DungeonSkill = {
	id : 0,
	lefttimes : 0,
	lefttime : 0,
    }

    static Unmarshal(buffer: BufferReader): DungeonSkill { 
	const reader = buffer
try{
	DungeonSkill.DefaultData.id = reader.readInt32()
	DungeonSkill.DefaultData.lefttimes = reader.readInt32()
	DungeonSkill.DefaultData.lefttime = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},DungeonSkill.DefaultData);
    }

    static Marshal(data: DungeonSkill): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.lefttimes)
	buffer.writeInt32(data.lefttime)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default DungeonSkill;