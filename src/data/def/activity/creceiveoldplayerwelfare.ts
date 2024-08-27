
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveOldPlayerWelfare {
	awardIndex : number;
}

class CReceiveOldPlayerWelfare {
    static DefaultData: CReceiveOldPlayerWelfare = {
	awardIndex : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveOldPlayerWelfare { 
	const reader = new BufferReader(buffer)
try{
	CReceiveOldPlayerWelfare.DefaultData.awardIndex = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveOldPlayerWelfare.DefaultData);
    }

    static Marshal(data: CReceiveOldPlayerWelfare): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.awardIndex)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveOldPlayerWelfare;