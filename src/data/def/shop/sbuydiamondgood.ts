
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import refresh from '../../bean/shop/mixgoodinfo';

interface SBuyDiamondGood {
	result : number;
	shopId : number;
	refresh : typeof refresh.DefaultData;
}

class SBuyDiamondGood {
    static DefaultData: SBuyDiamondGood = {
	result : 0,
	shopId : 0,
	refresh : refresh.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SBuyDiamondGood { 
	const reader = new BufferReader(buffer)
try{
	SBuyDiamondGood.DefaultData.result = reader.readInt32()
	SBuyDiamondGood.DefaultData.shopId = reader.readInt32()
	SBuyDiamondGood.DefaultData.refresh = refresh.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBuyDiamondGood.DefaultData);
    }

    static Marshal(data: SBuyDiamondGood): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)
	buffer.writeInt32(data.shopId)
	buffer.writeBuffer(refresh.Marshal(data.refresh))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBuyDiamondGood;