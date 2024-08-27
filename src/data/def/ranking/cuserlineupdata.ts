
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUserLineupData {
	uniqueId : bigint;
	rankType : number;
	rankId : string;
}

class CUserLineupData {
    static DefaultData: CUserLineupData = {
	uniqueId : 0n,
	rankType : 0,
	rankId : "",
    }

    static Unmarshal(buffer: Buffer): CUserLineupData { 
	const reader = new BufferReader(buffer)
try{
	CUserLineupData.DefaultData.uniqueId = reader.readInt64()
	CUserLineupData.DefaultData.rankType = reader.readInt32()
	CUserLineupData.DefaultData.rankId = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUserLineupData.DefaultData);
    }

    static Marshal(data: CUserLineupData): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.uniqueId))
	buffer.writeInt32(data.rankType)
	buffer.writeString(data.rankId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUserLineupData;