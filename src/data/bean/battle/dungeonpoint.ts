
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface DungeonPoint {
	sceneId : number;
	spirit : number;
	isPass : number;
	openedBoxes : number;
	totalBoxes : number;
}

class DungeonPoint {
    static DefaultData: DungeonPoint = {
	sceneId : 0,
	spirit : 0,
	isPass : 0,
	openedBoxes : 0,
	totalBoxes : 0,
    }

    static Unmarshal(buffer: BufferReader): DungeonPoint { 
	const reader = buffer
try{
	DungeonPoint.DefaultData.sceneId = reader.readInt32()
	DungeonPoint.DefaultData.spirit = reader.readInt32()
	DungeonPoint.DefaultData.isPass = reader.readInt16()
	DungeonPoint.DefaultData.openedBoxes = reader.readInt32()
	DungeonPoint.DefaultData.totalBoxes = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},DungeonPoint.DefaultData);
    }

    static Marshal(data: DungeonPoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.sceneId)
	buffer.writeInt32(data.spirit)
	buffer.writeInt16(data.isPass)
	buffer.writeInt32(data.openedBoxes)
	buffer.writeInt32(data.totalBoxes)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default DungeonPoint;