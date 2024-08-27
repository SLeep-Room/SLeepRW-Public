
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import blocks from '../../bean/activity/mazeawardblock';

interface SOpenLabyrinth {
	blocks : [number,typeof blocks.DefaultData][];
	cards : number[];
	currentPos : number;
	leftTime : bigint;
}

class SOpenLabyrinth {
    static DefaultData: SOpenLabyrinth = {
	blocks : [],
	cards : [],
	currentPos : 0,
	leftTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SOpenLabyrinth { 
	const reader = new BufferReader(buffer)
try{
	const blocksLength = reader.readCompactUInt32();

	for (let i = 0; i < blocksLength; i++) {
	    SOpenLabyrinth.DefaultData.blocks.push([reader.readInt32(),blocks.Unmarshal(reader)]);
	}
	const cardsLength = reader.readCompactUInt32();

	for (let i = 0; i < cardsLength; i++) {
	    SOpenLabyrinth.DefaultData.cards.push(reader.readInt32());
	}
	SOpenLabyrinth.DefaultData.currentPos = reader.readInt32()
	SOpenLabyrinth.DefaultData.leftTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenLabyrinth.DefaultData);
    }

    static Marshal(data: SOpenLabyrinth): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.blocks).length);
	data.blocks.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(blocks.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.cards).length);
	data.cards.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.currentPos)
	buffer.writeInt64(BigInt(data.leftTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenLabyrinth;