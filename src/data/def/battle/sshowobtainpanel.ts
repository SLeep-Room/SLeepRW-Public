
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import awardItems from '../../bean/item/beans/iteminfo';

interface SShowObtainPanel {
	awardCurrency : [number,bigint][];
	awardItems : typeof awardItems.DefaultData[];
	showType : number;
}

class SShowObtainPanel {
    static DefaultData: SShowObtainPanel = {
	awardCurrency : [],
	awardItems : [],
	showType : 0,
    }

    static Unmarshal(buffer: Buffer): SShowObtainPanel { 
	const reader = new BufferReader(buffer)
try{
	const awardCurrencyLength = reader.readCompactUInt32();

	for (let i = 0; i < awardCurrencyLength; i++) {
	    SShowObtainPanel.DefaultData.awardCurrency.push([reader.readInt32(),reader.readInt64()]);
	}
	const awardItemsLength = reader.readCompactUInt32();

	for (let i = 0; i < awardItemsLength; i++) {
	    SShowObtainPanel.DefaultData.awardItems.push(awardItems.Unmarshal(reader));
	}
	SShowObtainPanel.DefaultData.showType = reader.readByte()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SShowObtainPanel.DefaultData);
    }

    static Marshal(data: SShowObtainPanel): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.awardCurrency).length);
	data.awardCurrency.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt64(BigInt(value))
	});
	buffer.writeCompactInt32(Object.keys(data.awardItems).length);
	data.awardItems.forEach((value) => {
		buffer.writeBuffer(awardItems.Marshal(value))
	});
	buffer.writeByte(data.showType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SShowObtainPanel;