
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCheckChallengeRecord {
	battleType : number;
	battleId : number;
}

class CCheckChallengeRecord {
    static DefaultData: CCheckChallengeRecord = {
	battleType : 0,
	battleId : 0,
    }

    static Unmarshal(buffer: Buffer): CCheckChallengeRecord { 
	const reader = new BufferReader(buffer)
try{
	CCheckChallengeRecord.DefaultData.battleType = reader.readInt32()
	CCheckChallengeRecord.DefaultData.battleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCheckChallengeRecord.DefaultData);
    }

    static Marshal(data: CCheckChallengeRecord): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.battleType)
	buffer.writeInt32(data.battleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCheckChallengeRecord;