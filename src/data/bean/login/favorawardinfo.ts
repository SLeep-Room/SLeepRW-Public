
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import awards from '../../bean/item/beans/iteminfo';

interface FavorAwardInfo {
	status : number;
	awards : typeof awards.DefaultData[];
}

class FavorAwardInfo {
    static DefaultData: FavorAwardInfo = {
	status : 0,
	awards : [],
    }

    static Unmarshal(buffer: BufferReader): FavorAwardInfo { 
	const reader = buffer
try{
	FavorAwardInfo.DefaultData.status = reader.readInt32()
	const awardsLength = reader.readCompactUInt32();

	for (let i = 0; i < awardsLength; i++) {
	    FavorAwardInfo.DefaultData.awards.push(awards.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},FavorAwardInfo.DefaultData);
    }

    static Marshal(data: FavorAwardInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.status)
	buffer.writeCompactInt32(Object.keys(data.awards).length);
	data.awards.forEach((value) => {
		buffer.writeBuffer(awards.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default FavorAwardInfo;