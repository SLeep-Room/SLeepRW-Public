
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface MazeAwardBlock {
	blockType : number;
	status : number;
	itemId : number;
	itemNum : number;
}

class MazeAwardBlock {
    static DefaultData: MazeAwardBlock = {
	blockType : 0,
	status : 0,
	itemId : 0,
	itemNum : 0,
    }

    static Unmarshal(buffer: BufferReader): MazeAwardBlock { 
	const reader = buffer
try{
	MazeAwardBlock.DefaultData.blockType = reader.readInt32()
	MazeAwardBlock.DefaultData.status = reader.readInt32()
	MazeAwardBlock.DefaultData.itemId = reader.readInt32()
	MazeAwardBlock.DefaultData.itemNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},MazeAwardBlock.DefaultData);
    }

    static Marshal(data: MazeAwardBlock): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.blockType)
	buffer.writeInt32(data.status)
	buffer.writeInt32(data.itemId)
	buffer.writeInt32(data.itemNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default MazeAwardBlock;