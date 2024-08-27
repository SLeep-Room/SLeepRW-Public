
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUnlockBpPuzzle {
	puzzleId : number;
}

class CUnlockBpPuzzle {
    static DefaultData: CUnlockBpPuzzle = {
	puzzleId : 0,
    }

    static Unmarshal(buffer: Buffer): CUnlockBpPuzzle { 
	const reader = new BufferReader(buffer)
try{
	CUnlockBpPuzzle.DefaultData.puzzleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUnlockBpPuzzle.DefaultData);
    }

    static Marshal(data: CUnlockBpPuzzle): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.puzzleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUnlockBpPuzzle;