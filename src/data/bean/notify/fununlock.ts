
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface FunUnlock {
	funId : number;
	sortId : number;
}

class FunUnlock {
    static DefaultData: FunUnlock = {
	funId : 0,
	sortId : 0,
    }

    static Unmarshal(buffer: BufferReader): FunUnlock { 
	const reader = buffer
try{
	FunUnlock.DefaultData.funId = reader.readInt32()
	FunUnlock.DefaultData.sortId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},FunUnlock.DefaultData);
    }

    static Marshal(data: FunUnlock): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.funId)
	buffer.writeInt32(data.sortId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default FunUnlock;