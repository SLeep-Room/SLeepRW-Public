
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeRoles {
	lineupId : number;
	roles : [number,number][];
	power : number;
}

class SChangeRoles {
    static DefaultData: SChangeRoles = {
	lineupId : 0,
	roles : [],
	power : 0,
    }

    static Unmarshal(buffer: Buffer): SChangeRoles { 
	const reader = new BufferReader(buffer)
try{
	SChangeRoles.DefaultData.lineupId = reader.readInt32()
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    SChangeRoles.DefaultData.roles.push([reader.readInt32(),reader.readInt32()]);
	}
	SChangeRoles.DefaultData.power = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeRoles.DefaultData);
    }

    static Marshal(data: SChangeRoles): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.lineupId)
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.power)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeRoles;