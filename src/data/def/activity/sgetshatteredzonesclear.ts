
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import clearRewards from '../../bean/item/beans/iteminfo';

interface SGetShatteredZonesClear {
	clearRewards : typeof clearRewards.DefaultData[];
}

class SGetShatteredZonesClear {
    static DefaultData: SGetShatteredZonesClear = {
	clearRewards : [],
    }

    static Unmarshal(buffer: Buffer): SGetShatteredZonesClear { 
	const reader = new BufferReader(buffer)
try{
	const clearRewardsLength = reader.readCompactUInt32();

	for (let i = 0; i < clearRewardsLength; i++) {
	    SGetShatteredZonesClear.DefaultData.clearRewards.push(clearRewards.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetShatteredZonesClear.DefaultData);
    }

    static Marshal(data: SGetShatteredZonesClear): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.clearRewards).length);
	data.clearRewards.forEach((value) => {
		buffer.writeBuffer(clearRewards.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetShatteredZonesClear;