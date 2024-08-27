
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCheckShopRedpoint {
	shoptype : number;
	goodId : number;
}

class CCheckShopRedpoint {
    static DefaultData: CCheckShopRedpoint = {
	shoptype : 0,
	goodId : 0,
    }

    static Unmarshal(buffer: Buffer): CCheckShopRedpoint { 
	const reader = new BufferReader(buffer)
try{
	CCheckShopRedpoint.DefaultData.shoptype = reader.readInt32()
	CCheckShopRedpoint.DefaultData.goodId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCheckShopRedpoint.DefaultData);
    }

    static Marshal(data: CCheckShopRedpoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.shoptype)
	buffer.writeInt32(data.goodId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCheckShopRedpoint;