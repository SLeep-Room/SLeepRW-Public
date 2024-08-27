
import {Buffer} from 'buffer'
import BufferWriter from '../../../../util/buffer/BufferWriter';
import BufferReader from '../../../../util/buffer/BufferReader';

interface CFetchScoreAward {
	node : number;
}

class CFetchScoreAward {
    static DefaultData: CFetchScoreAward = {
	node : 0,
    }

    static Unmarshal(buffer: Buffer): CFetchScoreAward { 
	const reader = new BufferReader(buffer)
try{
	CFetchScoreAward.DefaultData.node = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CFetchScoreAward.DefaultData);
    }

    static Marshal(data: CFetchScoreAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.node)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CFetchScoreAward;