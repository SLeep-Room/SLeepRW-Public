
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import lineup from '../../bean/ranking/lineup';

interface SUserLineupData {
	uniqueId : bigint;
	rankType : number;
	rankId : string;
	lineup : typeof lineup.DefaultData;
}

class SUserLineupData {
    static DefaultData: SUserLineupData = {
	uniqueId : 0n,
	rankType : 0,
	rankId : "",
	lineup : lineup.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SUserLineupData { 
	const reader = new BufferReader(buffer)
try{
	SUserLineupData.DefaultData.uniqueId = reader.readInt64()
	SUserLineupData.DefaultData.rankType = reader.readInt32()
	SUserLineupData.DefaultData.rankId = reader.readString()
	SUserLineupData.DefaultData.lineup = lineup.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUserLineupData.DefaultData);
    }

    static Marshal(data: SUserLineupData): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.uniqueId))
	buffer.writeInt32(data.rankType)
	buffer.writeString(data.rankId)
	buffer.writeBuffer(lineup.Marshal(data.lineup))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUserLineupData;