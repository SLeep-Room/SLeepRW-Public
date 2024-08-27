
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import goods from '../../bean/shop/goodinfo';
import rmtGoods from '../../bean/shop/mixgoodinfo';

interface SGetShopInfo {
	shopId : number;
	goods : typeof goods.DefaultData[];
	rmtGoods : typeof rmtGoods.DefaultData[];
}

class SGetShopInfo {
    static DefaultData: SGetShopInfo = {
	shopId : 0,
	goods : [],
	rmtGoods : [],
    }

    static Unmarshal(buffer: Buffer): SGetShopInfo { 
	const reader = new BufferReader(buffer)
try{
	SGetShopInfo.DefaultData.shopId = reader.readInt32()
	const goodsLength = reader.readCompactUInt32();

	for (let i = 0; i < goodsLength; i++) {
	    SGetShopInfo.DefaultData.goods.push(goods.Unmarshal(reader));
	}
	const rmtGoodsLength = reader.readCompactUInt32();

	for (let i = 0; i < rmtGoodsLength; i++) {
	    SGetShopInfo.DefaultData.rmtGoods.push(rmtGoods.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetShopInfo.DefaultData);
    }

    static Marshal(data: SGetShopInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.shopId)
	buffer.writeCompactInt32(Object.keys(data.goods).length);
	data.goods.forEach((value) => {
		buffer.writeBuffer(goods.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.rmtGoods).length);
	data.rmtGoods.forEach((value) => {
		buffer.writeBuffer(rmtGoods.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetShopInfo;