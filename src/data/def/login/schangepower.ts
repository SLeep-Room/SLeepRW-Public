
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangePower {
	role : [number,number][];
	lineup : [number,number][];
}

class SChangePower {
    static DefaultData: SChangePower = {
	role : [],
	lineup : [],
    }

    static Unmarshal(buffer: Buffer): SChangePower { 
	const reader = new BufferReader(buffer)
try{
	const roleLength = reader.readCompactUInt32();

	for (let i = 0; i < roleLength; i++) {
	    SChangePower.DefaultData.role.push([reader.readInt32(),reader.readInt32()]);
	}
	const lineupLength = reader.readCompactUInt32();

	for (let i = 0; i < lineupLength; i++) {
	    SChangePower.DefaultData.lineup.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangePower.DefaultData);
    }

    static Marshal(data: SChangePower): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.role).length);
	data.role.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.lineup).length);
	data.lineup.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangePower;