
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import content from '../../bean/battle/battleverifyproparam';

interface BattleVerifyInfo {
	content : typeof content.DefaultData;
	ptype : number;
	step : number;
}

class BattleVerifyInfo {
    static DefaultData: BattleVerifyInfo = {
	content : content.DefaultData,
	ptype : 0,
	step : 0,
    }

    static Unmarshal(buffer: BufferReader): BattleVerifyInfo { 
	const reader = buffer
try{
	BattleVerifyInfo.DefaultData.content = content.Unmarshal(reader)
	BattleVerifyInfo.DefaultData.ptype = reader.readInt32()
	BattleVerifyInfo.DefaultData.step = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},BattleVerifyInfo.DefaultData);
    }

    static Marshal(data: BattleVerifyInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(content.Marshal(data.content))
	buffer.writeInt32(data.ptype)
	buffer.writeInt32(data.step)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default BattleVerifyInfo;