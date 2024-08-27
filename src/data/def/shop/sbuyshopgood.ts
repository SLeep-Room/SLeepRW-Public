
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import refresh from '../../bean/shop/goodinfo';

interface SBuyShopGood {
	result : number;
	shopId : number;
	refresh : typeof refresh.DefaultData[];
}

class SBuyShopGood {
    static DefaultData: SBuyShopGood = {
	result : 0,
	shopId : 0,
	refresh : [],
    }

    static Unmarshal(buffer: Buffer): SBuyShopGood { 
	const reader = new BufferReader(buffer)
try{
	SBuyShopGood.DefaultData.result = reader.readInt32()
	SBuyShopGood.DefaultData.shopId = reader.readInt32()
	const refreshLength = reader.readCompactUInt32();

	for (let i = 0; i < refreshLength; i++) {
	    SBuyShopGood.DefaultData.refresh.push(refresh.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBuyShopGood.DefaultData);
    }

    static Marshal(data: SBuyShopGood): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)
	buffer.writeInt32(data.shopId)
	buffer.writeCompactInt32(Object.keys(data.refresh).length);
	data.refresh.forEach((value) => {
		buffer.writeBuffer(refresh.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBuyShopGood;