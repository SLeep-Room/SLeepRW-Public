
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import dragonBoatItemPool from '../../bean/activity/dragonboatitempool';

interface SDragonBoatFestivalWish {
	currPoolId : number;
	dragonBoatItemPool : typeof dragonBoatItemPool.DefaultData[];
}

class SDragonBoatFestivalWish {
    static DefaultData: SDragonBoatFestivalWish = {
	currPoolId : 0,
	dragonBoatItemPool : [],
    }

    static Unmarshal(buffer: Buffer): SDragonBoatFestivalWish { 
	const reader = new BufferReader(buffer)
try{
	SDragonBoatFestivalWish.DefaultData.currPoolId = reader.readInt32()
	const dragonBoatItemPoolLength = reader.readCompactUInt32();

	for (let i = 0; i < dragonBoatItemPoolLength; i++) {
	    SDragonBoatFestivalWish.DefaultData.dragonBoatItemPool.push(dragonBoatItemPool.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SDragonBoatFestivalWish.DefaultData);
    }

    static Marshal(data: SDragonBoatFestivalWish): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.currPoolId)
	buffer.writeCompactInt32(Object.keys(data.dragonBoatItemPool).length);
	data.dragonBoatItemPool.forEach((value) => {
		buffer.writeBuffer(dragonBoatItemPool.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SDragonBoatFestivalWish;