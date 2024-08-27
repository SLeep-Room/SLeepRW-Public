
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import randomEntry from '../../bean/item/beans/randomentry';
import finalAttrEntry from '../../bean/item/beans/randomentry';

interface SEnchantEquip {
	equipKey : number;
	kind : number;
	luck : number;
	randomEntry : typeof randomEntry.DefaultData[];
	finalAttrEntry : typeof finalAttrEntry.DefaultData;
	power : number;
	finalAttr : [number,number][];
}

class SEnchantEquip {
    static DefaultData: SEnchantEquip = {
	equipKey : 0,
	kind : 0,
	luck : 0,
	randomEntry : [],
	finalAttrEntry : finalAttrEntry.DefaultData,
	power : 0,
	finalAttr : [],
    }

    static Unmarshal(buffer: Buffer): SEnchantEquip { 
	const reader = new BufferReader(buffer)
try{
	SEnchantEquip.DefaultData.equipKey = reader.readInt32()
	SEnchantEquip.DefaultData.kind = reader.readInt32()
	SEnchantEquip.DefaultData.luck = reader.readInt32()
	const randomEntryLength = reader.readCompactUInt32();

	for (let i = 0; i < randomEntryLength; i++) {
	    SEnchantEquip.DefaultData.randomEntry.push(randomEntry.Unmarshal(reader));
	}
	SEnchantEquip.DefaultData.finalAttrEntry = finalAttrEntry.Unmarshal(reader)
	SEnchantEquip.DefaultData.power = reader.readInt32()
	const finalAttrLength = reader.readCompactUInt32();

	for (let i = 0; i < finalAttrLength; i++) {
	    SEnchantEquip.DefaultData.finalAttr.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SEnchantEquip.DefaultData);
    }

    static Marshal(data: SEnchantEquip): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.equipKey)
	buffer.writeInt32(data.kind)
	buffer.writeInt32(data.luck)
	buffer.writeCompactInt32(Object.keys(data.randomEntry).length);
	data.randomEntry.forEach((value) => {
		buffer.writeBuffer(randomEntry.Marshal(value))
	});
	buffer.writeBuffer(finalAttrEntry.Marshal(data.finalAttrEntry))
	buffer.writeInt32(data.power)
	buffer.writeCompactInt32(Object.keys(data.finalAttr).length);
	data.finalAttr.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SEnchantEquip;