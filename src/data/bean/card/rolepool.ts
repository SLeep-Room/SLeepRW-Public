
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface RolePool {
	rate : number;
	ids : number[];
}

class RolePool {
    static DefaultData: RolePool = {
	rate : 0,
	ids : [],
    }

    static Unmarshal(buffer: BufferReader): RolePool { 
	const reader = buffer
try{
	RolePool.DefaultData.rate = reader.readInt32()
	const idsLength = reader.readCompactUInt32();

	for (let i = 0; i < idsLength; i++) {
	    RolePool.DefaultData.ids.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},RolePool.DefaultData);
    }

    static Marshal(data: RolePool): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rate)
	buffer.writeCompactInt32(Object.keys(data.ids).length);
	data.ids.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default RolePool;