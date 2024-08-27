
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SAlchemyRankLevelUp {
	level : number;
	stage : number;
	exp : number;
}

class SAlchemyRankLevelUp {
    static DefaultData: SAlchemyRankLevelUp = {
	level : 0,
	stage : 0,
	exp : 0,
    }

    static Unmarshal(buffer: Buffer): SAlchemyRankLevelUp { 
	const reader = new BufferReader(buffer)
try{
	SAlchemyRankLevelUp.DefaultData.level = reader.readInt32()
	SAlchemyRankLevelUp.DefaultData.stage = reader.readInt32()
	SAlchemyRankLevelUp.DefaultData.exp = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAlchemyRankLevelUp.DefaultData);
    }

    static Marshal(data: SAlchemyRankLevelUp): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.stage)
	buffer.writeInt32(data.exp)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAlchemyRankLevelUp;