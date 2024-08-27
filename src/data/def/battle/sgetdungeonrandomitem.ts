
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGetDungeonRandomItem {
	sceneId : number;
	key : number;
}

class SGetDungeonRandomItem {
    static DefaultData: SGetDungeonRandomItem = {
	sceneId : 0,
	key : 0,
    }

    static Unmarshal(buffer: Buffer): SGetDungeonRandomItem { 
	const reader = new BufferReader(buffer)
try{
	SGetDungeonRandomItem.DefaultData.sceneId = reader.readInt32()
	SGetDungeonRandomItem.DefaultData.key = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetDungeonRandomItem.DefaultData);
    }

    static Marshal(data: SGetDungeonRandomItem): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.sceneId)
	buffer.writeInt32(data.key)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetDungeonRandomItem;