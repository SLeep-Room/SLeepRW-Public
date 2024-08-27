
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import missions from '../../bean/activity/summermission';

interface SUpdateSummerMissions {
	missions : typeof missions.DefaultData[];
	sunlight : number;
}

class SUpdateSummerMissions {
    static DefaultData: SUpdateSummerMissions = {
	missions : [],
	sunlight : 0,
    }

    static Unmarshal(buffer: Buffer): SUpdateSummerMissions { 
	const reader = new BufferReader(buffer)
try{
	const missionsLength = reader.readCompactUInt32();

	for (let i = 0; i < missionsLength; i++) {
	    SUpdateSummerMissions.DefaultData.missions.push(missions.Unmarshal(reader));
	}
	SUpdateSummerMissions.DefaultData.sunlight = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUpdateSummerMissions.DefaultData);
    }

    static Marshal(data: SUpdateSummerMissions): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.missions).length);
	data.missions.forEach((value) => {
		buffer.writeBuffer(missions.Marshal(value))
	});
	buffer.writeInt32(data.sunlight)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUpdateSummerMissions;