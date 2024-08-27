
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CFetchTaskFinishAward {
	id : number;
}

class CFetchTaskFinishAward {
    static DefaultData: CFetchTaskFinishAward = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CFetchTaskFinishAward { 
	const reader = new BufferReader(buffer)
try{
	CFetchTaskFinishAward.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CFetchTaskFinishAward.DefaultData);
    }

    static Marshal(data: CFetchTaskFinishAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CFetchTaskFinishAward;