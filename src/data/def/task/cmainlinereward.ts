
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CMainLineReward {
	mainLineId : number;
}

class CMainLineReward {
    static DefaultData: CMainLineReward = {
	mainLineId : 0,
    }

    static Unmarshal(buffer: Buffer): CMainLineReward { 
	const reader = new BufferReader(buffer)
try{
	CMainLineReward.DefaultData.mainLineId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CMainLineReward.DefaultData);
    }

    static Marshal(data: CMainLineReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.mainLineId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CMainLineReward;