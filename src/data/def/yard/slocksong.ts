
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SLockSong {
	id : number[];
}

class SLockSong {
    static DefaultData: SLockSong = {
	id : [],
    }

    static Unmarshal(buffer: Buffer): SLockSong { 
	const reader = new BufferReader(buffer)
try{
	const idLength = reader.readCompactUInt32();

	for (let i = 0; i < idLength; i++) {
	    SLockSong.DefaultData.id.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLockSong.DefaultData);
    }

    static Marshal(data: SLockSong): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.id).length);
	data.id.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLockSong;