
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface WatermelonBossBean {
	id : number;
	status : number;
	damage : bigint;
	rank : number;
	awardStatue : number;
}

class WatermelonBossBean {
    static DefaultData: WatermelonBossBean = {
	id : 0,
	status : 0,
	damage : 0n,
	rank : 0,
	awardStatue : 0,
    }

    static Unmarshal(buffer: BufferReader): WatermelonBossBean { 
	const reader = buffer
try{
	WatermelonBossBean.DefaultData.id = reader.readInt32()
	WatermelonBossBean.DefaultData.status = reader.readInt32()
	WatermelonBossBean.DefaultData.damage = reader.readInt64()
	WatermelonBossBean.DefaultData.rank = reader.readInt32()
	WatermelonBossBean.DefaultData.awardStatue = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},WatermelonBossBean.DefaultData);
    }

    static Marshal(data: WatermelonBossBean): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.status)
	buffer.writeInt64(BigInt(data.damage))
	buffer.writeInt32(data.rank)
	buffer.writeInt32(data.awardStatue)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default WatermelonBossBean;