
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveWhiteValentineReward {
	id : number;
}

class CReceiveWhiteValentineReward {
    static DefaultData: CReceiveWhiteValentineReward = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveWhiteValentineReward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveWhiteValentineReward.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveWhiteValentineReward.DefaultData);
    }

    static Marshal(data: CReceiveWhiteValentineReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveWhiteValentineReward;