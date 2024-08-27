
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUnlockSong {
	id : number;
}

class SUnlockSong {
    static DefaultData: SUnlockSong = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): SUnlockSong { 
	const reader = new BufferReader(buffer)
try{
	SUnlockSong.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUnlockSong.DefaultData);
    }

    static Marshal(data: SUnlockSong): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUnlockSong;