
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface DragonBoatItemPool {
	poolId : number;
	itemId : number[];
	itemNum : number[];
}

class DragonBoatItemPool {
    static DefaultData: DragonBoatItemPool = {
	poolId : 0,
	itemId : [],
	itemNum : [],
    }

    static Unmarshal(buffer: BufferReader): DragonBoatItemPool { 
	const reader = buffer
try{
	DragonBoatItemPool.DefaultData.poolId = reader.readInt32()
	const itemIdLength = reader.readCompactUInt32();

	for (let i = 0; i < itemIdLength; i++) {
	    DragonBoatItemPool.DefaultData.itemId.push(reader.readInt32());
	}
	const itemNumLength = reader.readCompactUInt32();

	for (let i = 0; i < itemNumLength; i++) {
	    DragonBoatItemPool.DefaultData.itemNum.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},DragonBoatItemPool.DefaultData);
    }

    static Marshal(data: DragonBoatItemPool): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.poolId)
	buffer.writeCompactInt32(Object.keys(data.itemId).length);
	data.itemId.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.itemNum).length);
	data.itemNum.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default DragonBoatItemPool;