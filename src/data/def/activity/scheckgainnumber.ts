
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SCheckGainNumber {
	number : number;
}

class SCheckGainNumber {
    static DefaultData: SCheckGainNumber = {
	number : 0,
    }

    static Unmarshal(buffer: Buffer): SCheckGainNumber { 
	const reader = new BufferReader(buffer)
try{
	SCheckGainNumber.DefaultData.number = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SCheckGainNumber.DefaultData);
    }

    static Marshal(data: SCheckGainNumber): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.number)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SCheckGainNumber;