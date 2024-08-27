
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface FoolsDayRole {
	Id : number;
	roleLv : number;
	weaponLv : number;
	attack : number;
	blood : number;
}

class FoolsDayRole {
    static DefaultData: FoolsDayRole = {
	Id : 0,
	roleLv : 0,
	weaponLv : 0,
	attack : 0,
	blood : 0,
    }

    static Unmarshal(buffer: BufferReader): FoolsDayRole { 
	const reader = buffer
try{
	FoolsDayRole.DefaultData.Id = reader.readInt32()
	FoolsDayRole.DefaultData.roleLv = reader.readInt32()
	FoolsDayRole.DefaultData.weaponLv = reader.readInt32()
	FoolsDayRole.DefaultData.attack = reader.readInt32()
	FoolsDayRole.DefaultData.blood = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},FoolsDayRole.DefaultData);
    }

    static Marshal(data: FoolsDayRole): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.Id)
	buffer.writeInt32(data.roleLv)
	buffer.writeInt32(data.weaponLv)
	buffer.writeInt32(data.attack)
	buffer.writeInt32(data.blood)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default FoolsDayRole;