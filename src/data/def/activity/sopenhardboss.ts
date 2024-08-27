
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenHardBoss {
	leftNum : number;
}

class SOpenHardBoss {
    static DefaultData: SOpenHardBoss = {
	leftNum : 0,
    }

    static Unmarshal(buffer: Buffer): SOpenHardBoss { 
	const reader = new BufferReader(buffer)
try{
	SOpenHardBoss.DefaultData.leftNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenHardBoss.DefaultData);
    }

    static Marshal(data: SOpenHardBoss): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.leftNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenHardBoss;