
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import music from '../../bean/yard/music';

interface SInitMusic {
	music : typeof music.DefaultData;
}

class SInitMusic {
    static DefaultData: SInitMusic = {
	music : music.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SInitMusic { 
	const reader = new BufferReader(buffer)
try{
	SInitMusic.DefaultData.music = music.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SInitMusic.DefaultData);
    }

    static Marshal(data: SInitMusic): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(music.Marshal(data.music))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SInitMusic;