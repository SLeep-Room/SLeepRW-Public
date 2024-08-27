
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenMusic {
	albumId : number;
}

class COpenMusic {
    static DefaultData: COpenMusic = {
	albumId : 0,
    }

    static Unmarshal(buffer: Buffer): COpenMusic { 
	const reader = new BufferReader(buffer)
try{
	COpenMusic.DefaultData.albumId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenMusic.DefaultData);
    }

    static Marshal(data: COpenMusic): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.albumId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenMusic;