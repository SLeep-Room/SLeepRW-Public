
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SPlayerLevelUp {
	level : number;
	strengthLimit : number;
	roleMaxLv : number;
	strengthGet : number;
}

class SPlayerLevelUp {
    static DefaultData: SPlayerLevelUp = {
	level : 0,
	strengthLimit : 0,
	roleMaxLv : 0,
	strengthGet : 0,
    }

    static Unmarshal(buffer: Buffer): SPlayerLevelUp { 
	const reader = new BufferReader(buffer)
try{
	SPlayerLevelUp.DefaultData.level = reader.readInt32()
	SPlayerLevelUp.DefaultData.strengthLimit = reader.readInt32()
	SPlayerLevelUp.DefaultData.roleMaxLv = reader.readInt32()
	SPlayerLevelUp.DefaultData.strengthGet = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SPlayerLevelUp.DefaultData);
    }

    static Marshal(data: SPlayerLevelUp): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.strengthLimit)
	buffer.writeInt32(data.roleMaxLv)
	buffer.writeInt32(data.strengthGet)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SPlayerLevelUp;