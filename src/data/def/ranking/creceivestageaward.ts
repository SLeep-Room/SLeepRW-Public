
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveStageAward {
	id : number;
	stageId : number;
}

class CReceiveStageAward {
    static DefaultData: CReceiveStageAward = {
	id : 0,
	stageId : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveStageAward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveStageAward.DefaultData.id = reader.readInt32()
	CReceiveStageAward.DefaultData.stageId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveStageAward.DefaultData);
    }

    static Marshal(data: CReceiveStageAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.stageId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveStageAward;