
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBattleEndAction {
	battleid : number;
}

class CBattleEndAction {
    static DefaultData: CBattleEndAction = {
	battleid : 0,
    }

    static Unmarshal(buffer: Buffer): CBattleEndAction { 
	const reader = new BufferReader(buffer)
try{
	CBattleEndAction.DefaultData.battleid = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBattleEndAction.DefaultData);
    }

    static Marshal(data: CBattleEndAction): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.battleid)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBattleEndAction;