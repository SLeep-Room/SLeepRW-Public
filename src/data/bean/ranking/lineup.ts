
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import roles from '../../bean/ranking/role';

interface Lineup {
	roles : [number,typeof roles.DefaultData][];
}

class Lineup {
    static DefaultData: Lineup = {
	roles : [],
    }

    static Unmarshal(buffer: BufferReader): Lineup { 
	const reader = buffer
try{
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    Lineup.DefaultData.roles.push([reader.readInt32(),roles.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Lineup.DefaultData);
    }

    static Marshal(data: Lineup): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(roles.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Lineup;