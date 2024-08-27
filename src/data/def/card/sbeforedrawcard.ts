
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SBeforeDrawCard {
	roleList : number[];
	drawTimes : number;
	baodiNum : number;
	share : number;
}

class SBeforeDrawCard {
    static DefaultData: SBeforeDrawCard = {
	roleList : [],
	drawTimes : 0,
	baodiNum : 0,
	share : 0,
    }

    static Unmarshal(buffer: Buffer): SBeforeDrawCard { 
	const reader = new BufferReader(buffer)
try{
	const roleListLength = reader.readCompactUInt32();

	for (let i = 0; i < roleListLength; i++) {
	    SBeforeDrawCard.DefaultData.roleList.push(reader.readInt32());
	}
	SBeforeDrawCard.DefaultData.drawTimes = reader.readInt32()
	SBeforeDrawCard.DefaultData.baodiNum = reader.readInt32()
	SBeforeDrawCard.DefaultData.share = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBeforeDrawCard.DefaultData);
    }

    static Marshal(data: SBeforeDrawCard): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.roleList).length);
	data.roleList.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.drawTimes)
	buffer.writeInt32(data.baodiNum)
	buffer.writeInt32(data.share)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBeforeDrawCard;