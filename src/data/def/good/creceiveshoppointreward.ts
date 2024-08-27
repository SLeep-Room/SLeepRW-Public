
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveShopPointReward {
	id : number;
}

class CReceiveShopPointReward {
    static DefaultData: CReceiveShopPointReward = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveShopPointReward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveShopPointReward.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveShopPointReward.DefaultData);
    }

    static Marshal(data: CReceiveShopPointReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveShopPointReward;