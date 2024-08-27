
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import constructions from '../../bean/activity/loverconstruction';

interface SGetLoverActivityInfo {
	firstEnter : number;
	constructions : typeof constructions.DefaultData[];
}

class SGetLoverActivityInfo {
    static DefaultData: SGetLoverActivityInfo = {
	firstEnter : 0,
	constructions : [],
    }

    static Unmarshal(buffer: Buffer): SGetLoverActivityInfo { 
	const reader = new BufferReader(buffer)
try{
	SGetLoverActivityInfo.DefaultData.firstEnter = reader.readInt32()
	const constructionsLength = reader.readCompactUInt32();

	for (let i = 0; i < constructionsLength; i++) {
	    SGetLoverActivityInfo.DefaultData.constructions.push(constructions.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetLoverActivityInfo.DefaultData);
    }

    static Marshal(data: SGetLoverActivityInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.firstEnter)
	buffer.writeCompactInt32(Object.keys(data.constructions).length);
	data.constructions.forEach((value) => {
		buffer.writeBuffer(constructions.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetLoverActivityInfo;