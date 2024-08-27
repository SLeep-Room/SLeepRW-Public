
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRoleQuickLevelUP {
	roleId : number;
	beforePro : [number,number][];
	afterPro : [number,number][];
	beforeLevel : number;
	afterLevel : number;
	gainSkin : number;
}

class SRoleQuickLevelUP {
    static DefaultData: SRoleQuickLevelUP = {
	roleId : 0,
	beforePro : [],
	afterPro : [],
	beforeLevel : 0,
	afterLevel : 0,
	gainSkin : 0,
    }

    static Unmarshal(buffer: Buffer): SRoleQuickLevelUP { 
	const reader = new BufferReader(buffer)
try{
	SRoleQuickLevelUP.DefaultData.roleId = reader.readInt32()
	const beforeProLength = reader.readCompactUInt32();

	for (let i = 0; i < beforeProLength; i++) {
	    SRoleQuickLevelUP.DefaultData.beforePro.push([reader.readInt32(),reader.readInt32()]);
	}
	const afterProLength = reader.readCompactUInt32();

	for (let i = 0; i < afterProLength; i++) {
	    SRoleQuickLevelUP.DefaultData.afterPro.push([reader.readInt32(),reader.readInt32()]);
	}
	SRoleQuickLevelUP.DefaultData.beforeLevel = reader.readInt32()
	SRoleQuickLevelUP.DefaultData.afterLevel = reader.readInt32()
	SRoleQuickLevelUP.DefaultData.gainSkin = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRoleQuickLevelUP.DefaultData);
    }

    static Marshal(data: SRoleQuickLevelUP): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeCompactInt32(Object.keys(data.beforePro).length);
	data.beforePro.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.afterPro).length);
	data.afterPro.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.beforeLevel)
	buffer.writeInt32(data.afterLevel)
	buffer.writeInt32(data.gainSkin)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRoleQuickLevelUP;