
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CFetchShareAward {
	awardId : number;
}

class CFetchShareAward {
    static DefaultData: CFetchShareAward = {
	awardId : 0,
    }

    static Unmarshal(buffer: Buffer): CFetchShareAward { 
	const reader = new BufferReader(buffer)
try{
	CFetchShareAward.DefaultData.awardId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CFetchShareAward.DefaultData);
    }

    static Marshal(data: CFetchShareAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.awardId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CFetchShareAward;