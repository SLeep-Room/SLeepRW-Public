
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CBuyShopGood {
	shopId : number;
	goods : [number,number][];
}

class CBuyShopGood {
    static DefaultData: CBuyShopGood = {
	shopId : 0,
	goods : [],
    }

    static Unmarshal(buffer: Buffer): CBuyShopGood { 
	const reader = new BufferReader(buffer)
try{
	CBuyShopGood.DefaultData.shopId = reader.readInt32()
	const goodsLength = reader.readCompactUInt32();

	for (let i = 0; i < goodsLength; i++) {
	    CBuyShopGood.DefaultData.goods.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CBuyShopGood.DefaultData);
    }

    static Marshal(data: CBuyShopGood): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.shopId)
	buffer.writeCompactInt32(Object.keys(data.goods).length);
	data.goods.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CBuyShopGood;