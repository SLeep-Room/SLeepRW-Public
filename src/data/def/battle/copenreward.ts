
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenReward {
	process : number;
}

class COpenReward {
    static DefaultData: COpenReward = {
	process : 0,
    }

    static Unmarshal(buffer: Buffer): COpenReward { 
	const reader = new BufferReader(buffer)
try{
	COpenReward.DefaultData.process = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenReward.DefaultData);
    }

    static Marshal(data: COpenReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.process)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenReward;