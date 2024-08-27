
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUnlockSong {
	id : number;
}

class CUnlockSong {
    static DefaultData: CUnlockSong = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CUnlockSong { 
	const reader = new BufferReader(buffer)
try{
	CUnlockSong.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUnlockSong.DefaultData);
    }

    static Marshal(data: CUnlockSong): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUnlockSong;