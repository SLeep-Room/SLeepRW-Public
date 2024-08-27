
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import skins from '../../bean/item/beans/skininfo';

interface SReceiveRoleSkin {
	roleId : number;
	skins : typeof skins.DefaultData;
}

class SReceiveRoleSkin {
    static DefaultData: SReceiveRoleSkin = {
	roleId : 0,
	skins : skins.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SReceiveRoleSkin { 
	const reader = new BufferReader(buffer)
try{
	SReceiveRoleSkin.DefaultData.roleId = reader.readInt32()
	SReceiveRoleSkin.DefaultData.skins = skins.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveRoleSkin.DefaultData);
    }

    static Marshal(data: SReceiveRoleSkin): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeBuffer(skins.Marshal(data.skins))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveRoleSkin;