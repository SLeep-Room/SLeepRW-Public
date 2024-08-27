
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import entries from '../../bean/item/beans/randomentry';
import finalAttr from '../../bean/item/beans/randomentry';

interface SPreEnchantEquip {
	equipKey : number;
	leftEnchant : number;
	stuff : number;
	luck : number;
	nextCostMaNa : number;
	entries : typeof entries.DefaultData[];
	finalAttr : typeof finalAttr.DefaultData;
}

class SPreEnchantEquip {
    static DefaultData: SPreEnchantEquip = {
	equipKey : 0,
	leftEnchant : 0,
	stuff : 0,
	luck : 0,
	nextCostMaNa : 0,
	entries : [],
	finalAttr : finalAttr.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SPreEnchantEquip { 
	const reader = new BufferReader(buffer)
try{
	SPreEnchantEquip.DefaultData.equipKey = reader.readInt32()
	SPreEnchantEquip.DefaultData.leftEnchant = reader.readInt32()
	SPreEnchantEquip.DefaultData.stuff = reader.readInt32()
	SPreEnchantEquip.DefaultData.luck = reader.readInt32()
	SPreEnchantEquip.DefaultData.nextCostMaNa = reader.readInt32()
	const entriesLength = reader.readCompactUInt32();

	for (let i = 0; i < entriesLength; i++) {
	    SPreEnchantEquip.DefaultData.entries.push(entries.Unmarshal(reader));
	}
	SPreEnchantEquip.DefaultData.finalAttr = finalAttr.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SPreEnchantEquip.DefaultData);
    }

    static Marshal(data: SPreEnchantEquip): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.equipKey)
	buffer.writeInt32(data.leftEnchant)
	buffer.writeInt32(data.stuff)
	buffer.writeInt32(data.luck)
	buffer.writeInt32(data.nextCostMaNa)
	buffer.writeCompactInt32(Object.keys(data.entries).length);
	data.entries.forEach((value) => {
		buffer.writeBuffer(entries.Marshal(value))
	});
	buffer.writeBuffer(finalAttr.Marshal(data.finalAttr))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SPreEnchantEquip;