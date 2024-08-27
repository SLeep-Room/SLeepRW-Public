
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGlowwormCapacityLv {
	glowwormLevel : number;
}

class SGlowwormCapacityLv {
    static DefaultData: SGlowwormCapacityLv = {
	glowwormLevel : 0,
    }

    static Unmarshal(buffer: Buffer): SGlowwormCapacityLv { 
	const reader = new BufferReader(buffer)
try{
	SGlowwormCapacityLv.DefaultData.glowwormLevel = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGlowwormCapacityLv.DefaultData);
    }

    static Marshal(data: SGlowwormCapacityLv): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.glowwormLevel)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGlowwormCapacityLv;