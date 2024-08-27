
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChooseMazeCard {
	card : number;
}

class CChooseMazeCard {
    static DefaultData: CChooseMazeCard = {
	card : 0,
    }

    static Unmarshal(buffer: Buffer): CChooseMazeCard { 
	const reader = new BufferReader(buffer)
try{
	CChooseMazeCard.DefaultData.card = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChooseMazeCard.DefaultData);
    }

    static Marshal(data: CChooseMazeCard): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.card)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChooseMazeCard;