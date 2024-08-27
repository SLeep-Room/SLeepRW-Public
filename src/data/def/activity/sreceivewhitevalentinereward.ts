
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SReceiveWhiteValentineReward {
	id : number;
}

class SReceiveWhiteValentineReward {
    static DefaultData: SReceiveWhiteValentineReward = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): SReceiveWhiteValentineReward { 
	const reader = new BufferReader(buffer)
try{
	SReceiveWhiteValentineReward.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SReceiveWhiteValentineReward.DefaultData);
    }

    static Marshal(data: SReceiveWhiteValentineReward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SReceiveWhiteValentineReward;