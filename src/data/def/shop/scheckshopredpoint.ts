
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SCheckShopRedpoint {
	shoptype : number;
	goodId : number;
	canDo : number;
}

class SCheckShopRedpoint {
    static DefaultData: SCheckShopRedpoint = {
	shoptype : 0,
	goodId : 0,
	canDo : 0,
    }

    static Unmarshal(buffer: Buffer): SCheckShopRedpoint { 
	const reader = new BufferReader(buffer)
try{
	SCheckShopRedpoint.DefaultData.shoptype = reader.readInt32()
	SCheckShopRedpoint.DefaultData.goodId = reader.readInt32()
	SCheckShopRedpoint.DefaultData.canDo = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCheckShopRedpoint.DefaultData);
    }

    static Marshal(data: SCheckShopRedpoint): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.shoptype)
	buffer.writeInt32(data.goodId)
	buffer.writeInt32(data.canDo)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCheckShopRedpoint;