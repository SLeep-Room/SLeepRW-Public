
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendHalloweenShopState {
	state : number;
}

class SSendHalloweenShopState {
    static DefaultData: SSendHalloweenShopState = {
	state : 0,
    }

    static Unmarshal(buffer: Buffer): SSendHalloweenShopState { 
	const reader = new BufferReader(buffer)
try{
	SSendHalloweenShopState.DefaultData.state = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendHalloweenShopState.DefaultData);
    }

    static Marshal(data: SSendHalloweenShopState): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendHalloweenShopState;