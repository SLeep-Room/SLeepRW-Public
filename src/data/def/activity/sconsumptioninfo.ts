
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import awardStatus from '../../bean/activity/consumptionaward';

interface SConsumptionInfo {
	activityId : number;
	consumption : number;
	awardStatus : [number,typeof awardStatus.DefaultData][];
}

class SConsumptionInfo {
    static DefaultData: SConsumptionInfo = {
	activityId : 0,
	consumption : 0,
	awardStatus : [],
    }

    static Unmarshal(buffer: Buffer): SConsumptionInfo { 
	const reader = new BufferReader(buffer)
try{
	SConsumptionInfo.DefaultData.activityId = reader.readInt32()
	SConsumptionInfo.DefaultData.consumption = reader.readInt32()
	const awardStatusLength = reader.readCompactUInt32();

	for (let i = 0; i < awardStatusLength; i++) {
	    SConsumptionInfo.DefaultData.awardStatus.push([reader.readInt32(),awardStatus.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SConsumptionInfo.DefaultData);
    }

    static Marshal(data: SConsumptionInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.activityId)
	buffer.writeInt32(data.consumption)
	buffer.writeCompactInt32(Object.keys(data.awardStatus).length);
	data.awardStatus.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(awardStatus.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SConsumptionInfo;