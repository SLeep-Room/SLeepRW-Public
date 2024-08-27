
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRougeTowerChoiceBuff {
	pointID : number;
	choiceBuff : number;
	choiceResult : number;
}

class SRougeTowerChoiceBuff {
    static DefaultData: SRougeTowerChoiceBuff = {
	pointID : 0,
	choiceBuff : 0,
	choiceResult : 0,
    }

    static Unmarshal(buffer: Buffer): SRougeTowerChoiceBuff { 
	const reader = new BufferReader(buffer)
try{
	SRougeTowerChoiceBuff.DefaultData.pointID = reader.readInt32()
	SRougeTowerChoiceBuff.DefaultData.choiceBuff = reader.readInt32()
	SRougeTowerChoiceBuff.DefaultData.choiceResult = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRougeTowerChoiceBuff.DefaultData);
    }

    static Marshal(data: SRougeTowerChoiceBuff): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.pointID)
	buffer.writeInt32(data.choiceBuff)
	buffer.writeInt32(data.choiceResult)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRougeTowerChoiceBuff;