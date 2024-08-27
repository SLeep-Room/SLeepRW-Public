
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface BattleVerifyProParam {
	entityId : number;
	skillid : number;
	gmresult : number;
}

class BattleVerifyProParam {
    static DefaultData: BattleVerifyProParam = {
	entityId : 0,
	skillid : 0,
	gmresult : 0,
    }

    static Unmarshal(buffer: BufferReader): BattleVerifyProParam { 
	const reader = buffer
try{
	BattleVerifyProParam.DefaultData.entityId = reader.readInt32()
	BattleVerifyProParam.DefaultData.skillid = reader.readInt32()
	BattleVerifyProParam.DefaultData.gmresult = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},BattleVerifyProParam.DefaultData);
    }

    static Marshal(data: BattleVerifyProParam): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.entityId)
	buffer.writeInt32(data.skillid)
	buffer.writeInt32(data.gmresult)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default BattleVerifyProParam;