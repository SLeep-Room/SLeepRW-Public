
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUnlockBpPuzzle {
	puzzleId : number;
}

class SUnlockBpPuzzle {
    static DefaultData: SUnlockBpPuzzle = {
	puzzleId : 0,
    }

    static Unmarshal(buffer: Buffer): SUnlockBpPuzzle { 
	const reader = new BufferReader(buffer)
try{
	SUnlockBpPuzzle.DefaultData.puzzleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUnlockBpPuzzle.DefaultData);
    }

    static Marshal(data: SUnlockBpPuzzle): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.puzzleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUnlockBpPuzzle;