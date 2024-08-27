
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import list from '../../bean/login/role';

interface SRefreshRole {
	list : typeof list.DefaultData[];
}

class SRefreshRole {
    static DefaultData: SRefreshRole = {
	list : [],
    }

    static Unmarshal(buffer: Buffer): SRefreshRole { 
	const reader = new BufferReader(buffer)
try{
	const listLength = reader.readCompactUInt32();

	for (let i = 0; i < listLength; i++) {
	    SRefreshRole.DefaultData.list.push(list.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshRole.DefaultData);
    }

    static Marshal(data: SRefreshRole): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.list).length);
	data.list.forEach((value) => {
		buffer.writeBuffer(list.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshRole;