
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDustSynthesis {
	dustId : number;
	num : number;
}

class CDustSynthesis {
    static DefaultData: CDustSynthesis = {
	dustId : 0,
	num : 0,
    }

    static Unmarshal(buffer: Buffer): CDustSynthesis { 
	const reader = new BufferReader(buffer)
try{
	CDustSynthesis.DefaultData.dustId = reader.readInt32()
	CDustSynthesis.DefaultData.num = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDustSynthesis.DefaultData);
    }

    static Marshal(data: CDustSynthesis): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.dustId)
	buffer.writeInt32(data.num)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDustSynthesis;