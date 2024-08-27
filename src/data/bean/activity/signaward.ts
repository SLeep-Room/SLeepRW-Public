
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SignAward {
	itemId : number;
	itemNum : number;
	receive : number;
}

class SignAward {
    static DefaultData: SignAward = {
	itemId : 0,
	itemNum : 0,
	receive : 0,
    }

    static Unmarshal(buffer: BufferReader): SignAward { 
	const reader = buffer
try{
	SignAward.DefaultData.itemId = reader.readInt32()
	SignAward.DefaultData.itemNum = reader.readInt32()
	SignAward.DefaultData.receive = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SignAward.DefaultData);
    }

    static Marshal(data: SignAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.itemId)
	buffer.writeInt32(data.itemNum)
	buffer.writeInt32(data.receive)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SignAward;