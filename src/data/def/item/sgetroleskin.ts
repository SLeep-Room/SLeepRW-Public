
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import skins from '../../bean/item/beans/skininfo';

interface SGetRoleSkin {
	roleId : number;
	skins : [number,typeof skins.DefaultData][];
}

class SGetRoleSkin {
    static DefaultData: SGetRoleSkin = {
	roleId : 0,
	skins : [],
    }

    static Unmarshal(buffer: Buffer): SGetRoleSkin { 
	const reader = new BufferReader(buffer)
try{
	SGetRoleSkin.DefaultData.roleId = reader.readInt32()
	const skinsLength = reader.readCompactUInt32();

	for (let i = 0; i < skinsLength; i++) {
	    SGetRoleSkin.DefaultData.skins.push([reader.readInt32(),skins.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetRoleSkin.DefaultData);
    }

    static Marshal(data: SGetRoleSkin): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeCompactInt32(Object.keys(data.skins).length);
	data.skins.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(skins.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetRoleSkin;