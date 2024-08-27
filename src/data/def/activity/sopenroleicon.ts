
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenRoleIcon {
	roleNum : number;
	roleMap : [number,number][];
	progressReward : [number,number][];
	isMask : number;
}

class SOpenRoleIcon {
    static DefaultData: SOpenRoleIcon = {
	roleNum : 0,
	roleMap : [],
	progressReward : [],
	isMask : 0,
    }

    static Unmarshal(buffer: Buffer): SOpenRoleIcon { 
	const reader = new BufferReader(buffer)
try{
	SOpenRoleIcon.DefaultData.roleNum = reader.readInt32()
	const roleMapLength = reader.readCompactUInt32();

	for (let i = 0; i < roleMapLength; i++) {
	    SOpenRoleIcon.DefaultData.roleMap.push([reader.readInt32(),reader.readInt32()]);
	}
	const progressRewardLength = reader.readCompactUInt32();

	for (let i = 0; i < progressRewardLength; i++) {
	    SOpenRoleIcon.DefaultData.progressReward.push([reader.readInt32(),reader.readInt32()]);
	}
	SOpenRoleIcon.DefaultData.isMask = reader.readByte()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenRoleIcon.DefaultData);
    }

    static Marshal(data: SOpenRoleIcon): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleNum)
	buffer.writeCompactInt32(Object.keys(data.roleMap).length);
	data.roleMap.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.progressReward).length);
	data.progressReward.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeByte(data.isMask)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenRoleIcon;