
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import roles from '../../bean/activity/foolsdayrole';

interface SRefreshFoolsDayRoles {
	roles : typeof roles.DefaultData[];
}

class SRefreshFoolsDayRoles {
    static DefaultData: SRefreshFoolsDayRoles = {
	roles : [],
    }

    static Unmarshal(buffer: Buffer): SRefreshFoolsDayRoles { 
	const reader = new BufferReader(buffer)
try{
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    SRefreshFoolsDayRoles.DefaultData.roles.push(roles.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshFoolsDayRoles.DefaultData);
    }

    static Marshal(data: SRefreshFoolsDayRoles): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach((value) => {
		buffer.writeBuffer(roles.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshFoolsDayRoles;