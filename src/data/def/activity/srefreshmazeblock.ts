
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import blocks from '../../bean/activity/mazeawardblock';
import itemInfo from '../../bean/item/beans/iteminfo';

interface SRefreshMazeBlock {
	blocks : [number,typeof blocks.DefaultData][];
	pos : number;
	itemInfo : typeof itemInfo.DefaultData[];
}

class SRefreshMazeBlock {
    static DefaultData: SRefreshMazeBlock = {
	blocks : [],
	pos : 0,
	itemInfo : [],
    }

    static Unmarshal(buffer: Buffer): SRefreshMazeBlock { 
	const reader = new BufferReader(buffer)
try{
	const blocksLength = reader.readCompactUInt32();

	for (let i = 0; i < blocksLength; i++) {
	    SRefreshMazeBlock.DefaultData.blocks.push([reader.readInt32(),blocks.Unmarshal(reader)]);
	}
	SRefreshMazeBlock.DefaultData.pos = reader.readInt32()
	const itemInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < itemInfoLength; i++) {
	    SRefreshMazeBlock.DefaultData.itemInfo.push(itemInfo.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshMazeBlock.DefaultData);
    }

    static Marshal(data: SRefreshMazeBlock): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.blocks).length);
	data.blocks.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(blocks.Marshal(value))
	});
	buffer.writeInt32(data.pos)
	buffer.writeCompactInt32(Object.keys(data.itemInfo).length);
	data.itemInfo.forEach((value) => {
		buffer.writeBuffer(itemInfo.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshMazeBlock;