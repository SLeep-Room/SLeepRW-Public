
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SActivityDailySupply {
	activityId : number;
	supply : [number,number][];
}

class SActivityDailySupply {
    static DefaultData: SActivityDailySupply = {
	activityId : 0,
	supply : [],
    }

    static Unmarshal(buffer: Buffer): SActivityDailySupply { 
	const reader = new BufferReader(buffer)
try{
	SActivityDailySupply.DefaultData.activityId = reader.readInt32()
	const supplyLength = reader.readCompactUInt32();

	for (let i = 0; i < supplyLength; i++) {
	    SActivityDailySupply.DefaultData.supply.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SActivityDailySupply.DefaultData);
    }

    static Marshal(data: SActivityDailySupply): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeCompactInt32(Object.keys(data.supply).length);
	data.supply.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SActivityDailySupply;