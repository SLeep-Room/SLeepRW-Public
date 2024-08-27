
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import baseUserData from '../../bean/chat/baseuserdata';

interface ArenaRanking {
	baseUserData : typeof baseUserData.DefaultData;
	rank : number;
	pithy : bigint;
}

class ArenaRanking {
    static DefaultData: ArenaRanking = {
	baseUserData : baseUserData.DefaultData,
	rank : 0,
	pithy : 0n,
    }

    static Unmarshal(buffer: BufferReader): ArenaRanking { 
	const reader = buffer
try{
	ArenaRanking.DefaultData.baseUserData = baseUserData.Unmarshal(reader)
	ArenaRanking.DefaultData.rank = reader.readInt32()
	ArenaRanking.DefaultData.pithy = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ArenaRanking.DefaultData);
    }

    static Marshal(data: ArenaRanking): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(baseUserData.Marshal(data.baseUserData))
	buffer.writeInt32(data.rank)
	buffer.writeInt64(BigInt(data.pithy))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ArenaRanking;