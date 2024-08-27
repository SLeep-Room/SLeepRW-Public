
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetShopInfo {
	shopId : number;
}

class CGetShopInfo {
    static DefaultData: CGetShopInfo = {
	shopId : 0,
    }

    static Unmarshal(buffer: Buffer): CGetShopInfo { 
	const reader = new BufferReader(buffer)
try{
	CGetShopInfo.DefaultData.shopId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetShopInfo.DefaultData);
    }

    static Marshal(data: CGetShopInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.shopId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetShopInfo;