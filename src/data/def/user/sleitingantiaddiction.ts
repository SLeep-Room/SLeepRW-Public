
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SLeiTingAntiAddiction {
	lefttime : number;
	totaltime : number;
	isGuest : number;
	auth : number;
}

class SLeiTingAntiAddiction {
    static DefaultData: SLeiTingAntiAddiction = {
	lefttime : 0,
	totaltime : 0,
	isGuest : 0,
	auth : 0,
    }

    static Unmarshal(buffer: Buffer): SLeiTingAntiAddiction { 
	const reader = new BufferReader(buffer)
try{
	SLeiTingAntiAddiction.DefaultData.lefttime = reader.readInt32()
	SLeiTingAntiAddiction.DefaultData.totaltime = reader.readInt32()
	SLeiTingAntiAddiction.DefaultData.isGuest = reader.readByte()
	SLeiTingAntiAddiction.DefaultData.auth = reader.readByte()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SLeiTingAntiAddiction.DefaultData);
    }

    static Marshal(data: SLeiTingAntiAddiction): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.lefttime)
	buffer.writeInt32(data.totaltime)
	buffer.writeByte(data.isGuest)
	buffer.writeByte(data.auth)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SLeiTingAntiAddiction;