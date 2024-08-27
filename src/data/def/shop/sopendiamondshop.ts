
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import goods from '../../bean/shop/mixgoodinfo';

interface SOpenDiamondShop {
	shopId : number;
	goods : typeof goods.DefaultData[];
}

class SOpenDiamondShop {
    static DefaultData: SOpenDiamondShop = {
	shopId : 0,
	goods : [],
    }

    static Unmarshal(buffer: Buffer): SOpenDiamondShop { 
	const reader = new BufferReader(buffer)
try{
	SOpenDiamondShop.DefaultData.shopId = reader.readInt32()
	const goodsLength = reader.readCompactUInt32();

	for (let i = 0; i < goodsLength; i++) {
	    SOpenDiamondShop.DefaultData.goods.push(goods.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenDiamondShop.DefaultData);
    }

    static Marshal(data: SOpenDiamondShop): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.shopId)
	buffer.writeCompactInt32(Object.keys(data.goods).length);
	data.goods.forEach((value) => {
		buffer.writeBuffer(goods.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenDiamondShop;