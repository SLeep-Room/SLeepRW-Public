
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CStartCavernTask {
	id : number;
	roles : number[];
}

class CStartCavernTask {
    static DefaultData: CStartCavernTask = {
	id : 0,
	roles : [],
    }

    static Unmarshal(buffer: Buffer): CStartCavernTask { 
	const reader = new BufferReader(buffer)
try{
	CStartCavernTask.DefaultData.id = reader.readInt32()
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    CStartCavernTask.DefaultData.roles.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CStartCavernTask.DefaultData);
    }

    static Marshal(data: CStartCavernTask): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CStartCavernTask;