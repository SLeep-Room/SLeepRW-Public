
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface BossBean {
	id : number;
	status : number;
	passTime : bigint;
	rank : number;
	awardTotalNum : number;
	awardGot : number[];
	times : number;
	victoryTimes : number;
}

class BossBean {
    static DefaultData: BossBean = {
	id : 0,
	status : 0,
	passTime : 0n,
	rank : 0,
	awardTotalNum : 0,
	awardGot : [],
	times : 0,
	victoryTimes : 0,
    }

    static Unmarshal(buffer: BufferReader): BossBean { 
	const reader = buffer
try{
	BossBean.DefaultData.id = reader.readInt32()
	BossBean.DefaultData.status = reader.readInt32()
	BossBean.DefaultData.passTime = reader.readInt64()
	BossBean.DefaultData.rank = reader.readInt32()
	BossBean.DefaultData.awardTotalNum = reader.readInt32()
	const awardGotLength = reader.readCompactUInt32();

	for (let i = 0; i < awardGotLength; i++) {
	    BossBean.DefaultData.awardGot.push(reader.readInt32());
	}
	BossBean.DefaultData.times = reader.readInt32()
	BossBean.DefaultData.victoryTimes = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},BossBean.DefaultData);
    }

    static Marshal(data: BossBean): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.status)
	buffer.writeInt64(BigInt(data.passTime))
	buffer.writeInt32(data.rank)
	buffer.writeInt32(data.awardTotalNum)
	buffer.writeCompactInt32(Object.keys(data.awardGot).length);
	data.awardGot.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.times)
	buffer.writeInt32(data.victoryTimes)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default BossBean;