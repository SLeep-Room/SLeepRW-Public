
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import uniqueIds from '../../bean/mail/operateresult';
import items from '../../bean/item/beans/iteminfo';
import role from '../../bean/card/cardinfo';

interface SReceiveMails {
	uniqueIds : typeof uniqueIds.DefaultData[];
	items : typeof items.DefaultData[];
	role : typeof role.DefaultData[];
}

class SReceiveMails {
    static DefaultData: SReceiveMails = {
	uniqueIds : [],
	items : [],
	role : [],
    }

    static Unmarshal(buffer: Buffer): SReceiveMails { 
	const reader = new BufferReader(buffer)
try{
	const uniqueIdsLength = reader.readCompactUInt32();

	for (let i = 0; i < uniqueIdsLength; i++) {
	    SReceiveMails.DefaultData.uniqueIds.push(uniqueIds.Unmarshal(reader));
	}
	const itemsLength = reader.readCompactUInt32();

	for (let i = 0; i < itemsLength; i++) {
	    SReceiveMails.DefaultData.items.push(items.Unmarshal(reader));
	}
	const roleLength = reader.readCompactUInt32();

	for (let i = 0; i < roleLength; i++) {
	    SReceiveMails.DefaultData.role.push(role.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveMails.DefaultData);
    }

    static Marshal(data: SReceiveMails): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.uniqueIds).length);
	data.uniqueIds.forEach((value) => {
		buffer.writeBuffer(uniqueIds.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.items).length);
	data.items.forEach((value) => {
		buffer.writeBuffer(items.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.role).length);
	data.role.forEach((value) => {
		buffer.writeBuffer(role.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveMails;