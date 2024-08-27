
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import constructions from '../../bean/activity/christmasconstruction';

interface SGetChristmasActivityInfo {
	firstEnter : number;
	constructions : typeof constructions.DefaultData[];
	stage : number;
	canEnterSecond : number;
}

class SGetChristmasActivityInfo {
    static DefaultData: SGetChristmasActivityInfo = {
	firstEnter : 0,
	constructions : [],
	stage : 0,
	canEnterSecond : 0,
    }

    static Unmarshal(buffer: Buffer): SGetChristmasActivityInfo { 
	const reader = new BufferReader(buffer)
try{
	SGetChristmasActivityInfo.DefaultData.firstEnter = reader.readInt32()
	const constructionsLength = reader.readCompactUInt32();

	for (let i = 0; i < constructionsLength; i++) {
	    SGetChristmasActivityInfo.DefaultData.constructions.push(constructions.Unmarshal(reader));
	}
	SGetChristmasActivityInfo.DefaultData.stage = reader.readInt32()
	SGetChristmasActivityInfo.DefaultData.canEnterSecond = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetChristmasActivityInfo.DefaultData);
    }

    static Marshal(data: SGetChristmasActivityInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.firstEnter)
	buffer.writeCompactInt32(Object.keys(data.constructions).length);
	data.constructions.forEach((value) => {
		buffer.writeBuffer(constructions.Marshal(value))
	});
	buffer.writeInt32(data.stage)
	buffer.writeInt32(data.canEnterSecond)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetChristmasActivityInfo;