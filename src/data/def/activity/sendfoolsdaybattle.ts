
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SEndFoolsDayBattle {
	battleType : number;
	result : number;
}

class SEndFoolsDayBattle {
    static DefaultData: SEndFoolsDayBattle = {
	battleType : 0,
	result : 0,
    }

    static Unmarshal(buffer: Buffer): SEndFoolsDayBattle { 
	const reader = new BufferReader(buffer)
try{
	SEndFoolsDayBattle.DefaultData.battleType = reader.readInt32()
	SEndFoolsDayBattle.DefaultData.result = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SEndFoolsDayBattle.DefaultData);
    }

    static Marshal(data: SEndFoolsDayBattle): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.battleType)
	buffer.writeInt32(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SEndFoolsDayBattle;