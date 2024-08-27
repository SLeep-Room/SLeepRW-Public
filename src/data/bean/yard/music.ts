
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import songs from '../../bean/yard/song';

interface Music {
	id : number;
	level : number;
	songs : typeof songs.DefaultData[];
}

class Music {
    static DefaultData: Music = {
	id : 0,
	level : 0,
	songs : [],
    }

    static Unmarshal(buffer: BufferReader): Music { 
	const reader = buffer
try{
	Music.DefaultData.id = reader.readInt32()
	Music.DefaultData.level = reader.readInt32()
	const songsLength = reader.readCompactUInt32();

	for (let i = 0; i < songsLength; i++) {
	    Music.DefaultData.songs.push(songs.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Music.DefaultData);
    }

    static Marshal(data: Music): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.level)
	buffer.writeCompactInt32(Object.keys(data.songs).length);
	data.songs.forEach((value) => {
		buffer.writeBuffer(songs.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Music;