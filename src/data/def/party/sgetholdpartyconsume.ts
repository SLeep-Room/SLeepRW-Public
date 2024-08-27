
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGetHoldPartyConsume {
	number : number;
}

class SGetHoldPartyConsume {
    static DefaultData: SGetHoldPartyConsume = {
	number : 0,
    }

    static Unmarshal(buffer: Buffer): SGetHoldPartyConsume { 
	const reader = new BufferReader(buffer)
try{
	SGetHoldPartyConsume.DefaultData.number = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetHoldPartyConsume.DefaultData);
    }

    static Marshal(data: SGetHoldPartyConsume): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.number)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetHoldPartyConsume;