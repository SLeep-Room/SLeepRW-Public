
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetSpecialWeaponInfo {
	roleId : number;
}

class CGetSpecialWeaponInfo {
    static DefaultData: CGetSpecialWeaponInfo = {
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): CGetSpecialWeaponInfo { 
	const reader = new BufferReader(buffer)
try{
	CGetSpecialWeaponInfo.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetSpecialWeaponInfo.DefaultData);
    }

    static Marshal(data: CGetSpecialWeaponInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetSpecialWeaponInfo;