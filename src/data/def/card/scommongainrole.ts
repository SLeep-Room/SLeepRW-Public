
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import roles from '../../bean/card/cardinfo';
import crystals from '../../bean/item/beans/iteminfo';
import items from '../../bean/item/beans/iteminfo';

interface SCommonGainRole {
	roles : typeof roles.DefaultData[];
	crystals : typeof crystals.DefaultData[];
	items : typeof items.DefaultData[];
}

class SCommonGainRole {
    static DefaultData: SCommonGainRole = {
	roles : [],
	crystals : [],
	items : [],
    }

    static Unmarshal(buffer: Buffer): SCommonGainRole { 
	const reader = new BufferReader(buffer)
try{
	const rolesLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLength; i++) {
	    SCommonGainRole.DefaultData.roles.push(roles.Unmarshal(reader));
	}
	const crystalsLength = reader.readCompactUInt32();

	for (let i = 0; i < crystalsLength; i++) {
	    SCommonGainRole.DefaultData.crystals.push(crystals.Unmarshal(reader));
	}
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SCommonGainRole.DefaultData.items.push(items.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCommonGainRole.DefaultData);
    }

    static Marshal(data: SCommonGainRole): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.roles).length);
	data.roles.forEach((value) => {
		buffer.writeBuffer(roles.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.crystals).length);
	data.crystals.forEach((value) => {
		buffer.writeBuffer(crystals.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach((value) => {
		buffer.writeBuffer(items.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCommonGainRole;