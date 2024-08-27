
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRuneLevelUp {
	roleId : number;
	runeId : number;
}

class CRuneLevelUp {
    static DefaultData: CRuneLevelUp = {
	roleId : 0,
	runeId : 0,
    }

    static Unmarshal(buffer: Buffer): CRuneLevelUp { 
	const reader = new BufferReader(buffer)
try{
	CRuneLevelUp.DefaultData.roleId = reader.readInt32()
	CRuneLevelUp.DefaultData.runeId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRuneLevelUp.DefaultData);
    }

    static Marshal(data: CRuneLevelUp): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.runeId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRuneLevelUp;