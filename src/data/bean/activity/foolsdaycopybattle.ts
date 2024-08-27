
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface FoolsDayCopyBattle {
	bossId : number;
	leftTimes : number;
	difficult : number[];
}

class FoolsDayCopyBattle {
    static DefaultData: FoolsDayCopyBattle = {
	bossId : 0,
	leftTimes : 0,
	difficult : [],
    }

    static Unmarshal(buffer: BufferReader): FoolsDayCopyBattle { 
	const reader = buffer
try{
	FoolsDayCopyBattle.DefaultData.bossId = reader.readInt32()
	FoolsDayCopyBattle.DefaultData.leftTimes = reader.readInt32()
	const difficultLength = reader.readCompactUInt32();

	for (let i = 0; i < difficultLength; i++) {
	    FoolsDayCopyBattle.DefaultData.difficult.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},FoolsDayCopyBattle.DefaultData);
    }

    static Marshal(data: FoolsDayCopyBattle): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.bossId)
	buffer.writeInt32(data.leftTimes)
	buffer.writeCompactInt32(Object.keys(data.difficult).length);
	data.difficult.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default FoolsDayCopyBattle;