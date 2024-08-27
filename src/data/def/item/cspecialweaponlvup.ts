
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CSpecialWeaponlvUp {
	roleId : number;
}

class CSpecialWeaponlvUp {
    static DefaultData: CSpecialWeaponlvUp = {
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): CSpecialWeaponlvUp { 
	const reader = new BufferReader(buffer)
try{
	CSpecialWeaponlvUp.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CSpecialWeaponlvUp.DefaultData);
    }

    static Marshal(data: CSpecialWeaponlvUp): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CSpecialWeaponlvUp;