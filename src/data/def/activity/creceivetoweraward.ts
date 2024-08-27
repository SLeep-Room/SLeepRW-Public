
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveTowerAward {
	id : number;
}

class CReceiveTowerAward {
    static DefaultData: CReceiveTowerAward = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveTowerAward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveTowerAward.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveTowerAward.DefaultData);
    }

    static Marshal(data: CReceiveTowerAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveTowerAward;