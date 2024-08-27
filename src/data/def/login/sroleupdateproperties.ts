
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRoleUpdateProperties {
	roleId : number;
	properties : [number,number][];
}

class SRoleUpdateProperties {
    static DefaultData: SRoleUpdateProperties = {
	roleId : 0,
	properties : [],
    }

    static Unmarshal(buffer: Buffer): SRoleUpdateProperties { 
	const reader = new BufferReader(buffer)
try{
	SRoleUpdateProperties.DefaultData.roleId = reader.readInt32()
	const propertiesLength = reader.readCompactUInt32();

	for (let i = 0; i < propertiesLength; i++) {
	    SRoleUpdateProperties.DefaultData.properties.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRoleUpdateProperties.DefaultData);
    }

    static Marshal(data: SRoleUpdateProperties): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeCompactInt32(Object.keys(data.properties).length);
	data.properties.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRoleUpdateProperties;