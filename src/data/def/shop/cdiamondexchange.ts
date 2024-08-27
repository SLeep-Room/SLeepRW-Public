
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDiamondExchange {
	costItem : number;
	costItemSum : number;
	exchangeCurrencyType : number;
	exchangeCurrencySum : number;
}

class CDiamondExchange {
    static DefaultData: CDiamondExchange = {
	costItem : 0,
	costItemSum : 0,
	exchangeCurrencyType : 0,
	exchangeCurrencySum : 0,
    }

    static Unmarshal(buffer: Buffer): CDiamondExchange { 
	const reader = new BufferReader(buffer)
try{
	CDiamondExchange.DefaultData.costItem = reader.readInt32()
	CDiamondExchange.DefaultData.costItemSum = reader.readInt32()
	CDiamondExchange.DefaultData.exchangeCurrencyType = reader.readInt32()
	CDiamondExchange.DefaultData.exchangeCurrencySum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDiamondExchange.DefaultData);
    }

    static Marshal(data: CDiamondExchange): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.costItem)
	buffer.writeInt32(data.costItemSum)
	buffer.writeInt32(data.exchangeCurrencyType)
	buffer.writeInt32(data.exchangeCurrencySum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDiamondExchange;