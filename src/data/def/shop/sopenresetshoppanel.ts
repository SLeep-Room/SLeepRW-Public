
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenResetShopPanel {
	shoptype : number;
	leftChance : number;
	currencyType : number;
	nextTimeCost : number;
}

class SOpenResetShopPanel {
    static DefaultData: SOpenResetShopPanel = {
	shoptype : 0,
	leftChance : 0,
	currencyType : 0,
	nextTimeCost : 0,
    }

    static Unmarshal(buffer: Buffer): SOpenResetShopPanel { 
	const reader = new BufferReader(buffer)
try{
	SOpenResetShopPanel.DefaultData.shoptype = reader.readInt32()
	SOpenResetShopPanel.DefaultData.leftChance = reader.readInt32()
	SOpenResetShopPanel.DefaultData.currencyType = reader.readInt32()
	SOpenResetShopPanel.DefaultData.nextTimeCost = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenResetShopPanel.DefaultData);
    }

    static Marshal(data: SOpenResetShopPanel): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.shoptype)
	buffer.writeInt32(data.leftChance)
	buffer.writeInt32(data.currencyType)
	buffer.writeInt32(data.nextTimeCost)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenResetShopPanel;