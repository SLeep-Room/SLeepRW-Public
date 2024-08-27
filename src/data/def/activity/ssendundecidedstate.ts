
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendUndecidedState {
	state : number;
}

class SSendUndecidedState {
    static DefaultData: SSendUndecidedState = {
	state : 0,
    }

    static Unmarshal(buffer: Buffer): SSendUndecidedState { 
	const reader = new BufferReader(buffer)
try{
	SSendUndecidedState.DefaultData.state = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendUndecidedState.DefaultData);
    }

    static Marshal(data: SSendUndecidedState): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendUndecidedState;