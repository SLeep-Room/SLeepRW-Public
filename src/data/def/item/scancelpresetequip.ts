
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SCancelPreSetEquip {
	roleId : number[];
	equipType : number;
}

class SCancelPreSetEquip {
    static DefaultData: SCancelPreSetEquip = {
	roleId : [],
	equipType : 0,
    }

    static Unmarshal(buffer: Buffer): SCancelPreSetEquip { 
	const reader = new BufferReader(buffer)
try{
	const roleIdLength = reader.readCompactUInt32();

	for (let i = 0; i < roleIdLength; i++) {
	    SCancelPreSetEquip.DefaultData.roleId.push(reader.readInt32());
	}
	SCancelPreSetEquip.DefaultData.equipType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCancelPreSetEquip.DefaultData);
    }

    static Marshal(data: SCancelPreSetEquip): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.roleId).length);
	data.roleId.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.equipType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCancelPreSetEquip;