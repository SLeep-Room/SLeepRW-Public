
import {Buffer} from 'buffer'
import BufferWriter from '../../../../util/buffer/BufferWriter';
import BufferReader from '../../../../util/buffer/BufferReader';
import itemList from '../../../bean/item/beans/iteminfo';

interface SRoleReset {
	roleId : number;
	isPreview : number;
	itemList : typeof itemList.DefaultData[];
}

class SRoleReset {
    static DefaultData: SRoleReset = {
	roleId : 0,
	isPreview : 0,
	itemList : [],
    }

    static Unmarshal(buffer: Buffer): SRoleReset { 
	const reader = new BufferReader(buffer)
try{
	SRoleReset.DefaultData.roleId = reader.readInt32()
	SRoleReset.DefaultData.isPreview = reader.readInt32()
	const itemListLength = reader.readCompactUInt32();

	for (let i = 0; i < itemListLength; i++) {
	    SRoleReset.DefaultData.itemList.push(itemList.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRoleReset.DefaultData);
    }

    static Marshal(data: SRoleReset): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.isPreview)
	buffer.writeCompactInt32(Object.keys(data.itemList).length);
	data.itemList.forEach((value) => {
		buffer.writeBuffer(itemList.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRoleReset;