
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface DungeonObj {
	id : number;
	objType : number;
	objId : number;
	status : number;
	x : number;
	y : number;
}

class DungeonObj {
    static DefaultData: DungeonObj = {
	id : 0,
	objType : 0,
	objId : 0,
	status : 0,
	x : 0,
	y : 0,
    }

    static Unmarshal(buffer: BufferReader): DungeonObj { 
	const reader = buffer
try{
	DungeonObj.DefaultData.id = reader.readInt32()
	DungeonObj.DefaultData.objType = reader.readInt32()
	DungeonObj.DefaultData.objId = reader.readInt32()
	DungeonObj.DefaultData.status = reader.readInt32()
	DungeonObj.DefaultData.x = reader.readInt32()
	DungeonObj.DefaultData.y = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},DungeonObj.DefaultData);
    }

    static Marshal(data: DungeonObj): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.objType)
	buffer.writeInt32(data.objId)
	buffer.writeInt32(data.status)
	buffer.writeInt32(data.x)
	buffer.writeInt32(data.y)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default DungeonObj;