
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Song {
	id : number;
	statue : number;
}

class Song {
    static DefaultData: Song = {
	id : 0,
	statue : 0,
    }

    static Unmarshal(buffer: BufferReader): Song { 
	const reader = buffer
try{
	Song.DefaultData.id = reader.readInt32()
	Song.DefaultData.statue = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Song.DefaultData);
    }

    static Marshal(data: Song): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.statue)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Song;