
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface DungeonNpc {
	id : number;
	x : number;
	z : number;
	state : number;
}

class DungeonNpc {
    static DefaultData: DungeonNpc = {
	id : 0,
	x : 0,
	z : 0,
	state : 0,
    }

    static Unmarshal(buffer: BufferReader): DungeonNpc { 
	const reader = buffer
try{
	DungeonNpc.DefaultData.id = reader.readInt32()
	DungeonNpc.DefaultData.x = reader.readInt32()
	DungeonNpc.DefaultData.z = reader.readInt32()
	DungeonNpc.DefaultData.state = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},DungeonNpc.DefaultData);
    }

    static Marshal(data: DungeonNpc): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.x)
	buffer.writeInt32(data.z)
	buffer.writeInt32(data.state)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default DungeonNpc;