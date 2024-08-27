
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import shopInfo from '../../bean/shop/shopinfo';

interface SOpenShop {
	shopInfo : typeof shopInfo.DefaultData[];
}

class SOpenShop {
    static DefaultData: SOpenShop = {
	shopInfo : [],
    }

    static Unmarshal(buffer: Buffer): SOpenShop { 
	const reader = new BufferReader(buffer)
try{
	const shopInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < shopInfoLength; i++) {
	    SOpenShop.DefaultData.shopInfo.push(shopInfo.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenShop.DefaultData);
    }

    static Marshal(data: SOpenShop): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.shopInfo).length);
	data.shopInfo.forEach((value) => {
		buffer.writeBuffer(shopInfo.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenShop;