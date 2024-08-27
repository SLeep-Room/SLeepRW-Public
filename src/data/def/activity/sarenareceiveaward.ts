
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import itemInfo from '../../bean/item/beans/iteminfo';

interface SArenaReceiveAward {
	itemInfo : typeof itemInfo.DefaultData[];
}

class SArenaReceiveAward {
    static DefaultData: SArenaReceiveAward = {
	itemInfo : [],
    }

    static Unmarshal(buffer: Buffer): SArenaReceiveAward { 
	const reader = new BufferReader(buffer)
try{
	const itemInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < itemInfoLength; i++) {
	    SArenaReceiveAward.DefaultData.itemInfo.push(itemInfo.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SArenaReceiveAward.DefaultData);
    }

    static Marshal(data: SArenaReceiveAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.itemInfo).length);
	data.itemInfo.forEach((value) => {
		buffer.writeBuffer(itemInfo.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SArenaReceiveAward;