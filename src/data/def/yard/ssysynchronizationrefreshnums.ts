
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSySynchronizationRefreshNums {
	nums : number;
	leftRefreshTime : bigint;
}

class SSySynchronizationRefreshNums {
    static DefaultData: SSySynchronizationRefreshNums = {
	nums : 0,
	leftRefreshTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SSySynchronizationRefreshNums { 
	const reader = new BufferReader(buffer)
try{
	SSySynchronizationRefreshNums.DefaultData.nums = reader.readInt32()
	SSySynchronizationRefreshNums.DefaultData.leftRefreshTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSySynchronizationRefreshNums.DefaultData);
    }

    static Marshal(data: SSySynchronizationRefreshNums): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.nums)
	buffer.writeInt64(BigInt(data.leftRefreshTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSySynchronizationRefreshNums;