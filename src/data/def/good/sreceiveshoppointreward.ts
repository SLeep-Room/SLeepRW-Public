
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SReceiveShopPointReward {
	id : number;
}

class SReceiveShopPointReward {
    static DefaultData: SReceiveShopPointReward = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): SReceiveShopPointReward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveShopPointReward.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveShopPointReward.DefaultData);
    }

    static Marshal(data: SReceiveShopPointReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveShopPointReward;