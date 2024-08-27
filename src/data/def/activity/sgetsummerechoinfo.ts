
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import constructions from '../../bean/activity/summerechoconstruction';

interface SGetSummerEchoInfo {
	firstEnter : number;
	constructions : typeof constructions.DefaultData[];
	snackRedpoint : number;
	activityLeftTime : bigint;
}

class SGetSummerEchoInfo {
    static DefaultData: SGetSummerEchoInfo = {
	firstEnter : 0,
	constructions : [],
	snackRedpoint : 0,
	activityLeftTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SGetSummerEchoInfo { 
	const reader = new BufferReader(buffer)
try{
	SGetSummerEchoInfo.DefaultData.firstEnter = reader.readInt32()
	const constructionsLength = reader.readCompactUInt32();

	for (let i = 0; i < constructionsLength; i++) {
	    SGetSummerEchoInfo.DefaultData.constructions.push(constructions.Unmarshal(reader));
	}
	SGetSummerEchoInfo.DefaultData.snackRedpoint = reader.readInt32()
	SGetSummerEchoInfo.DefaultData.activityLeftTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetSummerEchoInfo.DefaultData);
    }

    static Marshal(data: SGetSummerEchoInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.firstEnter)
	buffer.writeCompactInt32(Object.keys(data.constructions).length);
	data.constructions.forEach((value) => {
		buffer.writeBuffer(constructions.Marshal(value))
	});
	buffer.writeInt32(data.snackRedpoint)
	buffer.writeInt64(BigInt(data.activityLeftTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetSummerEchoInfo;