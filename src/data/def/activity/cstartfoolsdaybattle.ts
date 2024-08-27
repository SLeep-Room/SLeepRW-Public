
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CStartFoolsDayBattle {
	battleType : number;
	battleId : number;
}

class CStartFoolsDayBattle {
    static DefaultData: CStartFoolsDayBattle = {
	battleType : 0,
	battleId : 0,
    }

    static Unmarshal(buffer: Buffer): CStartFoolsDayBattle { 
	const reader = new BufferReader(buffer)
try{
	CStartFoolsDayBattle.DefaultData.battleType = reader.readInt32()
	CStartFoolsDayBattle.DefaultData.battleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CStartFoolsDayBattle.DefaultData);
    }

    static Marshal(data: CStartFoolsDayBattle): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.battleType)
	buffer.writeInt32(data.battleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CStartFoolsDayBattle;