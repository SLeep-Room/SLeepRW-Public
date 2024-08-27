
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChristmasSupportShopState {
	state : number;
}

class SChristmasSupportShopState {
    static DefaultData: SChristmasSupportShopState = {
	state : 0,
    }

    static Unmarshal(buffer: Buffer): SChristmasSupportShopState { 
	const reader = new BufferReader(buffer)
try{
	SChristmasSupportShopState.DefaultData.state = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChristmasSupportShopState.DefaultData);
    }

    static Marshal(data: SChristmasSupportShopState): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChristmasSupportShopState;