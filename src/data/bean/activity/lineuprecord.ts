
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface LineupRecord {
	roles : [number,number][];
	time : number;
}

class LineupRecord {
    static DefaultData: LineupRecord = {
	roles : [],
	time : 0,
    }

    static Unmarshal(buffer: BufferReader): LineupRecord { 
	const reader = buffer
try{
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    LineupRecord.DefaultData.roles.push([reader.readInt32(),reader.readInt32()]);
	}
	LineupRecord.DefaultData.time = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},LineupRecord.DefaultData);
    }

    static Marshal(data: LineupRecord): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.time)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default LineupRecord;