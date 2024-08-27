
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import itemInfo from '../../bean/item/beans/iteminfo';

interface SReceiveAward {
	actId : number;
	index : number[];
	itemInfo : typeof itemInfo.DefaultData[];
}

class SReceiveAward {
    static DefaultData: SReceiveAward = {
	actId : 0,
	index : [],
	itemInfo : [],
    }

    static Unmarshal(buffer: Buffer): SReceiveAward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveAward.DefaultData.actId = reader.readInt32()
	const indexLength = reader.readCompactUInt32();

	for (let i = 0; i < indexLength; i++) {
	    SReceiveAward.DefaultData.index.push(reader.readInt32());
	}
	const itemInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < itemInfoLength; i++) {
	    SReceiveAward.DefaultData.itemInfo.push(itemInfo.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveAward.DefaultData);
    }

    static Marshal(data: SReceiveAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.actId)
	buffer.writeCompactInt32(Object.keys(data.index).length);
	data.index.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.itemInfo).length);
	data.itemInfo.forEach((value) => {
		buffer.writeBuffer(itemInfo.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveAward;