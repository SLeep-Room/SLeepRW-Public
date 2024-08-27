
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import role from '../../bean/activity/foolsdayrole';

interface SRefreshFoolsDaySingleRole {
	role : typeof role.DefaultData;
}

class SRefreshFoolsDaySingleRole {
    static DefaultData: SRefreshFoolsDaySingleRole = {
	role : role.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SRefreshFoolsDaySingleRole { 
	const reader = new BufferReader(buffer)
try{
	SRefreshFoolsDaySingleRole.DefaultData.role = role.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshFoolsDaySingleRole.DefaultData);
    }

    static Marshal(data: SRefreshFoolsDaySingleRole): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(role.Marshal(data.role))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshFoolsDaySingleRole;