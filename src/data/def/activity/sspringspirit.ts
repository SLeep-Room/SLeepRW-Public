
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSpringSpirit {
	spirit : number;
	lefttime : number;
}

class SSpringSpirit {
    static DefaultData: SSpringSpirit = {
	spirit : 0,
	lefttime : 0,
    }

    static Unmarshal(buffer: Buffer): SSpringSpirit { 
	const reader = new BufferReader(buffer)
try{
	SSpringSpirit.DefaultData.spirit = reader.readInt32()
	SSpringSpirit.DefaultData.lefttime = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSpringSpirit.DefaultData);
    }

    static Marshal(data: SSpringSpirit): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.spirit)
	buffer.writeInt32(data.lefttime)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSpringSpirit;