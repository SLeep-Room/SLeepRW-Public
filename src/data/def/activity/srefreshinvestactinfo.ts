
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRefreshInvestActInfo {
	close : number;
	actId : number;
	channel : number[];
	currentChannel : number;
	leftTimes : number;
	actLeftTime : bigint;
	todayFetched : number;
}

class SRefreshInvestActInfo {
    static DefaultData: SRefreshInvestActInfo = {
	close : 0,
	actId : 0,
	channel : [],
	currentChannel : 0,
	leftTimes : 0,
	actLeftTime : 0n,
	todayFetched : 0,
    }

    static Unmarshal(buffer: Buffer): SRefreshInvestActInfo { 
	const reader = new BufferReader(buffer)
try{
	SRefreshInvestActInfo.DefaultData.close = reader.readInt32()
	SRefreshInvestActInfo.DefaultData.actId = reader.readInt32()
	const channelLength = reader.readCompactUInt32();

	for (let i = 0; i < channelLength; i++) {
	    SRefreshInvestActInfo.DefaultData.channel.push(reader.readInt32());
	}
	SRefreshInvestActInfo.DefaultData.currentChannel = reader.readInt32()
	SRefreshInvestActInfo.DefaultData.leftTimes = reader.readInt32()
	SRefreshInvestActInfo.DefaultData.actLeftTime = reader.readInt64()
	SRefreshInvestActInfo.DefaultData.todayFetched = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshInvestActInfo.DefaultData);
    }

    static Marshal(data: SRefreshInvestActInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.close)
	buffer.writeInt32(data.actId)
	buffer.writeCompactInt32(Object.keys(data.channel).length);
	data.channel.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.currentChannel)
	buffer.writeInt32(data.leftTimes)
	buffer.writeInt64(BigInt(data.actLeftTime))
	buffer.writeInt32(data.todayFetched)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshInvestActInfo;