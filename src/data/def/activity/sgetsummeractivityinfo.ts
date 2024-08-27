
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import missions from '../../bean/activity/summermission';
import constructions from '../../bean/activity/summerconstruction';

interface SGetSummerActivityInfo {
	firstEnter : number;
	sunlight : number;
	state : number;
	missions : typeof missions.DefaultData[];
	constructions : typeof constructions.DefaultData[];
	constructionRedpoint : number;
	snackRedpoint : number;
}

class SGetSummerActivityInfo {
    static DefaultData: SGetSummerActivityInfo = {
	firstEnter : 0,
	sunlight : 0,
	state : 0,
	missions : [],
	constructions : [],
	constructionRedpoint : 0,
	snackRedpoint : 0,
    }

    static Unmarshal(buffer: Buffer): SGetSummerActivityInfo { 
	const reader = new BufferReader(buffer)
try{
	SGetSummerActivityInfo.DefaultData.firstEnter = reader.readInt32()
	SGetSummerActivityInfo.DefaultData.sunlight = reader.readInt32()
	SGetSummerActivityInfo.DefaultData.state = reader.readInt32()
	const missionsLength = reader.readCompactUInt32();

	for (let i = 0; i < missionsLength; i++) {
	    SGetSummerActivityInfo.DefaultData.missions.push(missions.Unmarshal(reader));
	}
	const constructionsLength = reader.readCompactUInt32();

	for (let i = 0; i < constructionsLength; i++) {
	    SGetSummerActivityInfo.DefaultData.constructions.push(constructions.Unmarshal(reader));
	}
	SGetSummerActivityInfo.DefaultData.constructionRedpoint = reader.readInt32()
	SGetSummerActivityInfo.DefaultData.snackRedpoint = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetSummerActivityInfo.DefaultData);
    }

    static Marshal(data: SGetSummerActivityInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.firstEnter)
	buffer.writeInt32(data.sunlight)
	buffer.writeInt32(data.state)
	buffer.writeCompactInt32(Object.keys(data.missions).length);
	data.missions.forEach((value) => {
		buffer.writeBuffer(missions.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.constructions).length);
	data.constructions.forEach((value) => {
		buffer.writeBuffer(constructions.Marshal(value))
	});
	buffer.writeInt32(data.constructionRedpoint)
	buffer.writeInt32(data.snackRedpoint)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetSummerActivityInfo;