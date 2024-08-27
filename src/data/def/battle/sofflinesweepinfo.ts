
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOfflineSweepInfo {
	status : number;
	battleType : number;
	id : number;
	leftTime : bigint;
	totalNum : number;
	leftNum : number;
	receivedNum : number;
}

class SOfflineSweepInfo {
    static DefaultData: SOfflineSweepInfo = {
	status : 0,
	battleType : 0,
	id : 0,
	leftTime : 0n,
	totalNum : 0,
	leftNum : 0,
	receivedNum : 0,
    }

    static Unmarshal(buffer: Buffer): SOfflineSweepInfo { 
	const reader = new BufferReader(buffer)
try{
	SOfflineSweepInfo.DefaultData.status = reader.readInt32()
	SOfflineSweepInfo.DefaultData.battleType = reader.readInt32()
	SOfflineSweepInfo.DefaultData.id = reader.readInt32()
	SOfflineSweepInfo.DefaultData.leftTime = reader.readInt64()
	SOfflineSweepInfo.DefaultData.totalNum = reader.readInt32()
	SOfflineSweepInfo.DefaultData.leftNum = reader.readInt32()
	SOfflineSweepInfo.DefaultData.receivedNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOfflineSweepInfo.DefaultData);
    }

    static Marshal(data: SOfflineSweepInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.status)
	buffer.writeInt32(data.battleType)
	buffer.writeInt32(data.id)
	buffer.writeInt64(BigInt(data.leftTime))
	buffer.writeInt32(data.totalNum)
	buffer.writeInt32(data.leftNum)
	buffer.writeInt32(data.receivedNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOfflineSweepInfo;