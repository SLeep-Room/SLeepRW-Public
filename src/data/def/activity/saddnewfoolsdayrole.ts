
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SAddNewFoolsDayRole {
	Id : number;
}

class SAddNewFoolsDayRole {
    static DefaultData: SAddNewFoolsDayRole = {
	Id : 0,
    }

    static Unmarshal(buffer: Buffer): SAddNewFoolsDayRole { 
	const reader = new BufferReader(buffer)
try{
	SAddNewFoolsDayRole.DefaultData.Id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAddNewFoolsDayRole.DefaultData);
    }

    static Marshal(data: SAddNewFoolsDayRole): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.Id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAddNewFoolsDayRole;