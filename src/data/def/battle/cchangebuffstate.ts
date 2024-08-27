
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeBuffState {
	id : number;
	status : number;
}

class CChangeBuffState {
    static DefaultData: CChangeBuffState = {
	id : 0,
	status : 0,
    }

    static Unmarshal(buffer: Buffer): CChangeBuffState { 
	const reader = new BufferReader(buffer)
try{
	CChangeBuffState.DefaultData.id = reader.readInt32()
	CChangeBuffState.DefaultData.status = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeBuffState.DefaultData);
    }

    static Marshal(data: CChangeBuffState): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.status)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeBuffState;