
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import itemList from '../../bean/item/beans/iteminfo';

interface SRune {
	runeId : number;
	itemList : typeof itemList.DefaultData[];
}

class SRune {
    static DefaultData: SRune = {
	runeId : 0,
	itemList : [],
    }

    static Unmarshal(buffer: Buffer): SRune { 
	const reader = new BufferReader(buffer)
try{
	SRune.DefaultData.runeId = reader.readInt32()
	const itemListLength = reader.readCompactUInt32();

	for (let i = 0; i < itemListLength; i++) {
	    SRune.DefaultData.itemList.push(itemList.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRune.DefaultData);
    }

    static Marshal(data: SRune): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.runeId)
	buffer.writeCompactInt32(Object.keys(data.itemList).length);
	data.itemList.forEach((value) => {
		buffer.writeBuffer(itemList.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRune;