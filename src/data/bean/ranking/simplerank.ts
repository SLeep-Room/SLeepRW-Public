
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import baseUserData from '../../bean/chat/baseuserdata';

interface SimpleRank {
	baseUserData : typeof baseUserData.DefaultData;
	rank : number;
	score : bigint;
}

class SimpleRank {
    static DefaultData: SimpleRank = {
	baseUserData : baseUserData.DefaultData,
	rank : 0,
	score : 0n,
    }

    static Unmarshal(buffer: BufferReader): SimpleRank { 
	const reader = buffer
try{
	SimpleRank.DefaultData.baseUserData = baseUserData.Unmarshal(reader)
	SimpleRank.DefaultData.rank = reader.readInt32()
	SimpleRank.DefaultData.score = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SimpleRank.DefaultData);
    }

    static Marshal(data: SimpleRank): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(baseUserData.Marshal(data.baseUserData))
	buffer.writeInt32(data.rank)
	buffer.writeInt64(BigInt(data.score))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SimpleRank;