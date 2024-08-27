
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUnlockPuzzle {
	activityId : number;
	puzzleId : number;
}

class CUnlockPuzzle {
    static DefaultData: CUnlockPuzzle = {
	activityId : 0,
	puzzleId : 0,
    }

    static Unmarshal(buffer: Buffer): CUnlockPuzzle { 
	const reader = new BufferReader(buffer)
try{
	CUnlockPuzzle.DefaultData.activityId = reader.readInt32()
	CUnlockPuzzle.DefaultData.puzzleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUnlockPuzzle.DefaultData);
    }

    static Marshal(data: CUnlockPuzzle): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeInt32(data.puzzleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUnlockPuzzle;