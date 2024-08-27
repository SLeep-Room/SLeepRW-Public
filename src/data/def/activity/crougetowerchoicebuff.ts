
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRougeTowerChoiceBuff {
	pointID : number;
	buffChoice : number;
}

class CRougeTowerChoiceBuff {
    static DefaultData: CRougeTowerChoiceBuff = {
	pointID : 0,
	buffChoice : 0,
    }

    static Unmarshal(buffer: Buffer): CRougeTowerChoiceBuff { 
	const reader = new BufferReader(buffer)
try{
	CRougeTowerChoiceBuff.DefaultData.pointID = reader.readInt32()
	CRougeTowerChoiceBuff.DefaultData.buffChoice = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRougeTowerChoiceBuff.DefaultData);
    }

    static Marshal(data: CRougeTowerChoiceBuff): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.pointID)
	buffer.writeInt32(data.buffChoice)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRougeTowerChoiceBuff;