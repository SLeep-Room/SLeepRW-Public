
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetLoverReward {
	boxId : number;
}

class CGetLoverReward {
    static DefaultData: CGetLoverReward = {
	boxId : 0,
    }

    static Unmarshal(buffer: Buffer): CGetLoverReward { 
	const reader = new BufferReader(buffer)
try{
	CGetLoverReward.DefaultData.boxId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetLoverReward.DefaultData);
    }

    static Marshal(data: CGetLoverReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.boxId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetLoverReward;