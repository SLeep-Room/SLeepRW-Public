
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SDragonBoatFestivalInfo {
	leftTime : bigint;
	actOpen : number;
	wishOpen : number;
	shopOpen : number;
	redpoint : number[];
}

class SDragonBoatFestivalInfo {
    static DefaultData: SDragonBoatFestivalInfo = {
	leftTime : 0n,
	actOpen : 0,
	wishOpen : 0,
	shopOpen : 0,
	redpoint : [],
    }

    static Unmarshal(buffer: Buffer): SDragonBoatFestivalInfo { 
	const reader = new BufferReader(buffer)
try{
	SDragonBoatFestivalInfo.DefaultData.leftTime = reader.readInt64()
	SDragonBoatFestivalInfo.DefaultData.actOpen = reader.readInt32()
	SDragonBoatFestivalInfo.DefaultData.wishOpen = reader.readInt32()
	SDragonBoatFestivalInfo.DefaultData.shopOpen = reader.readInt32()
	const redpointLength = reader.readCompactUInt32();

	for (let i = 0; i < redpointLength; i++) {
	    SDragonBoatFestivalInfo.DefaultData.redpoint.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SDragonBoatFestivalInfo.DefaultData);
    }

    static Marshal(data: SDragonBoatFestivalInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeInt32(data.actOpen)
	buffer.writeInt32(data.wishOpen)
	buffer.writeInt32(data.shopOpen)
	buffer.writeCompactInt32(Object.keys(data.redpoint).length);
	data.redpoint.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SDragonBoatFestivalInfo;