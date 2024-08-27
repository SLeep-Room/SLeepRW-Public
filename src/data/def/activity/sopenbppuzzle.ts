
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenBpPuzzle {
	Id : number;
	leftTime : bigint;
	unlockedPuzzle : number[];
	receivedAward : number[];
}

class SOpenBpPuzzle {
    static DefaultData: SOpenBpPuzzle = {
	Id : 0,
	leftTime : 0n,
	unlockedPuzzle : [],
	receivedAward : [],
    }

    static Unmarshal(buffer: Buffer): SOpenBpPuzzle { 
	const reader = new BufferReader(buffer)
try{
	SOpenBpPuzzle.DefaultData.Id = reader.readInt32()
	SOpenBpPuzzle.DefaultData.leftTime = reader.readInt64()
	const unlockedPuzzleLength = reader.readCompactUInt32();

	for (let i = 0; i < unlockedPuzzleLength; i++) {
	    SOpenBpPuzzle.DefaultData.unlockedPuzzle.push(reader.readInt32());
	}
	const receivedAwardLength = reader.readCompactUInt32();

	for (let i = 0; i < receivedAwardLength; i++) {
	    SOpenBpPuzzle.DefaultData.receivedAward.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenBpPuzzle.DefaultData);
    }

    static Marshal(data: SOpenBpPuzzle): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.Id)
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeCompactInt32(Object.keys(data.unlockedPuzzle).length);
	data.unlockedPuzzle.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.receivedAward).length);
	data.receivedAward.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenBpPuzzle;