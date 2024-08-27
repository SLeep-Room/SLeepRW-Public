
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeBuffState {
	id : number;
	status : number;
}

class SChangeBuffState {
    static DefaultData: SChangeBuffState = {
	id : 0,
	status : 0,
    }

    static Unmarshal(buffer: Buffer): SChangeBuffState { 
	const reader = new BufferReader(buffer)
try{
	SChangeBuffState.DefaultData.id = reader.readInt32()
	SChangeBuffState.DefaultData.status = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeBuffState.DefaultData);
    }

    static Marshal(data: SChangeBuffState): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.status)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeBuffState;