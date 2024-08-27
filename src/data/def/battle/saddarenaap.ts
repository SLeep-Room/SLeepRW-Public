
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SAddArenaAP {
	apAddTimes : number;
}

class SAddArenaAP {
    static DefaultData: SAddArenaAP = {
	apAddTimes : 0,
    }

    static Unmarshal(buffer: Buffer): SAddArenaAP { 
	const reader = new BufferReader(buffer)
try{
	SAddArenaAP.DefaultData.apAddTimes = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAddArenaAP.DefaultData);
    }

    static Marshal(data: SAddArenaAP): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.apAddTimes)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAddArenaAP;