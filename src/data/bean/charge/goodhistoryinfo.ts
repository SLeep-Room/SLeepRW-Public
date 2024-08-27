
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface GoodHistoryInfo {
	sn : bigint;
	status : number;
	price : number;
	obtainedDiamond : number;
	bonusDiamond : number;
	createtime : bigint;
}

class GoodHistoryInfo {
    static DefaultData: GoodHistoryInfo = {
	sn : 0n,
	status : 0,
	price : 0,
	obtainedDiamond : 0,
	bonusDiamond : 0,
	createtime : 0n,
    }

    static Unmarshal(buffer: BufferReader): GoodHistoryInfo { 
	const reader = buffer
try{
	GoodHistoryInfo.DefaultData.sn = reader.readInt64()
	GoodHistoryInfo.DefaultData.status = reader.readInt32()
	GoodHistoryInfo.DefaultData.price = reader.readInt32()
	GoodHistoryInfo.DefaultData.obtainedDiamond = reader.readInt32()
	GoodHistoryInfo.DefaultData.bonusDiamond = reader.readInt32()
	GoodHistoryInfo.DefaultData.createtime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},GoodHistoryInfo.DefaultData);
    }

    static Marshal(data: GoodHistoryInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.sn))
	buffer.writeInt32(data.status)
	buffer.writeInt32(data.price)
	buffer.writeInt32(data.obtainedDiamond)
	buffer.writeInt32(data.bonusDiamond)
	buffer.writeInt64(BigInt(data.createtime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default GoodHistoryInfo;