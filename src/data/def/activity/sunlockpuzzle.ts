
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUnlockPuzzle {
	activityId : number;
	puzzleId : number;
	puzzleNum : number;
}

class SUnlockPuzzle {
    static DefaultData: SUnlockPuzzle = {
	activityId : 0,
	puzzleId : 0,
	puzzleNum : 0,
    }

    static Unmarshal(buffer: Buffer): SUnlockPuzzle { 
	const reader = new BufferReader(buffer)
try{
	SUnlockPuzzle.DefaultData.activityId = reader.readInt32()
	SUnlockPuzzle.DefaultData.puzzleId = reader.readInt32()
	SUnlockPuzzle.DefaultData.puzzleNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUnlockPuzzle.DefaultData);
    }

    static Marshal(data: SUnlockPuzzle): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeInt32(data.puzzleId)
	buffer.writeInt32(data.puzzleNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUnlockPuzzle;