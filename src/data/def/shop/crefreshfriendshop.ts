
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRefreshFriendShop {
	shopType : number;
}

class CRefreshFriendShop {
    static DefaultData: CRefreshFriendShop = {
	shopType : 0,
    }

    static Unmarshal(buffer: Buffer): CRefreshFriendShop { 
	const reader = new BufferReader(buffer)
try{
	CRefreshFriendShop.DefaultData.shopType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRefreshFriendShop.DefaultData);
    }

    static Marshal(data: CRefreshFriendShop): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.shopType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRefreshFriendShop;