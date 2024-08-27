
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCommitQuest {
	uniqueId : bigint;
	answer : string;
	validate : number;
}

class CCommitQuest {
    static DefaultData: CCommitQuest = {
	uniqueId : 0n,
	answer : "",
	validate : 0,
    }

    static Unmarshal(buffer: Buffer): CCommitQuest { 
	const reader = new BufferReader(buffer)
try{
	CCommitQuest.DefaultData.uniqueId = reader.readInt64()
	CCommitQuest.DefaultData.answer = reader.readString()
	CCommitQuest.DefaultData.validate = reader.readByte()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCommitQuest.DefaultData);
    }

    static Marshal(data: CCommitQuest): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.uniqueId))
	buffer.writeString(data.answer)
	buffer.writeByte(data.validate)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCommitQuest;