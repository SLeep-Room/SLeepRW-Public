
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRoleBaseProperties {
	roleId : number;
	curLvBasePro : [number,number][];
	nextLvBasePro : [number,number][];
	breakLvRange : number[];
	addPercent : [number,number][];
}

class SRoleBaseProperties {
    static DefaultData: SRoleBaseProperties = {
	roleId : 0,
	curLvBasePro : [],
	nextLvBasePro : [],
	breakLvRange : [],
	addPercent : [],
    }

    static Unmarshal(buffer: Buffer): SRoleBaseProperties { 
	const reader = new BufferReader(buffer)
try{
	SRoleBaseProperties.DefaultData.roleId = reader.readInt32()
	const curLvBaseProLength = reader.readCompactUInt32();

	for (let i = 0; i < curLvBaseProLength; i++) {
	    SRoleBaseProperties.DefaultData.curLvBasePro.push([reader.readInt32(),reader.readInt32()]);
	}
	const nextLvBaseProLength = reader.readCompactUInt32();

	for (let i = 0; i < nextLvBaseProLength; i++) {
	    SRoleBaseProperties.DefaultData.nextLvBasePro.push([reader.readInt32(),reader.readInt32()]);
	}
	const breakLvRangeLength = reader.readCompactUInt32();

	for (let i = 0; i < breakLvRangeLength; i++) {
	    SRoleBaseProperties.DefaultData.breakLvRange.push(reader.readInt32());
	}
	const addPercentLength = reader.readCompactUInt32();

	for (let i = 0; i < addPercentLength; i++) {
	    SRoleBaseProperties.DefaultData.addPercent.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRoleBaseProperties.DefaultData);
    }

    static Marshal(data: SRoleBaseProperties): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeCompactInt32(Object.keys(data.curLvBasePro).length);
	data.curLvBasePro.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.nextLvBasePro).length);
	data.nextLvBasePro.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.breakLvRange).length);
	data.breakLvRange.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.addPercent).length);
	data.addPercent.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRoleBaseProperties;