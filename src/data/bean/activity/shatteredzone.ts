
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import LineupsRecords from '../../bean/activity/lineuprecord';

interface ShatteredZone {
	zoneIndex : number;
	normalRewards : [number,number][];
	firstPassRewards : [number,number][];
	LineupsRecords : typeof LineupsRecords.DefaultData[];
	thisWeekState : number;
}

class ShatteredZone {
    static DefaultData: ShatteredZone = {
	zoneIndex : 0,
	normalRewards : [],
	firstPassRewards : [],
	LineupsRecords : [],
	thisWeekState : 0,
    }

    static Unmarshal(buffer: BufferReader): ShatteredZone { 
	const reader = buffer
try{
	ShatteredZone.DefaultData.zoneIndex = reader.readInt32()
	const normalRewardsLength = reader.readCompactUInt32();

	for (let i = 0; i < normalRewardsLength; i++) {
	    ShatteredZone.DefaultData.normalRewards.push([reader.readInt32(),reader.readInt32()]);
	}
	const firstPassRewardsLength = reader.readCompactUInt32();

	for (let i = 0; i < firstPassRewardsLength; i++) {
	    ShatteredZone.DefaultData.firstPassRewards.push([reader.readInt32(),reader.readInt32()]);
	}
	const LineupsRecordsLength = reader.readCompactUInt32();

	for (let i = 0; i < LineupsRecordsLength; i++) {
	    ShatteredZone.DefaultData.LineupsRecords.push(LineupsRecords.Unmarshal(reader));
	}
	ShatteredZone.DefaultData.thisWeekState = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ShatteredZone.DefaultData);
    }

    static Marshal(data: ShatteredZone): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.zoneIndex)
	buffer.writeCompactInt32(Object.keys(data.normalRewards).length);
	data.normalRewards.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.firstPassRewards).length);
	data.firstPassRewards.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeCompactInt32(Object.keys(data.LineupsRecords).length);
	data.LineupsRecords.forEach((value) => {
		buffer.writeBuffer(LineupsRecords.Marshal(value))
	});
	buffer.writeInt32(data.thisWeekState)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ShatteredZone;