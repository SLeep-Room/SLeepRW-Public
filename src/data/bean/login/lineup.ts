
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Lineup {
	id : number;
	name : string;
	roles : [number,number][];
	skill : number;
	power : number;
}

class Lineup {
    static DefaultData: Lineup = {
	id : 0,
	name : "",
	roles : [],
	skill : 0,
	power : 0,
    }

    static Unmarshal(buffer: BufferReader): Lineup { 
	const reader = buffer
try{
	Lineup.DefaultData.id = reader.readInt32()
	Lineup.DefaultData.name = reader.readString()
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    Lineup.DefaultData.roles.push([reader.readInt32(),reader.readInt32()]);
	}
	Lineup.DefaultData.skill = reader.readInt32()
	Lineup.DefaultData.power = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Lineup.DefaultData);
    }

    static Marshal(data: Lineup): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeString(data.name)
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.skill)
	buffer.writeInt32(data.power)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Lineup;