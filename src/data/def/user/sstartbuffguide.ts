
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SStartBuffGuide {
	buffType : number;
}

class SStartBuffGuide {
    static DefaultData: SStartBuffGuide = {
	buffType : 0,
    }

    static Unmarshal(buffer: Buffer): SStartBuffGuide { 
	const reader = new BufferReader(buffer)
try{
	SStartBuffGuide.DefaultData.buffType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SStartBuffGuide.DefaultData);
    }

    static Marshal(data: SStartBuffGuide): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.buffType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SStartBuffGuide;