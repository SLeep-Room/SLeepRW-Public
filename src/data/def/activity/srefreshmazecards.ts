
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRefreshMazeCards {
	cards : number[];
}

class SRefreshMazeCards {
    static DefaultData: SRefreshMazeCards = {
	cards : [],
    }

    static Unmarshal(buffer: Buffer): SRefreshMazeCards { 
	const reader = new BufferReader(buffer)
try{
	const cardsLength = reader.readCompactUInt32();

	for (let i = 0; i < cardsLength; i++) {
	    SRefreshMazeCards.DefaultData.cards.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshMazeCards.DefaultData);
    }

    static Marshal(data: SRefreshMazeCards): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.cards).length);
	data.cards.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshMazeCards;