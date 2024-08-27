
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeUserIntroduce {
	introduce : string;
}

class SChangeUserIntroduce {
    static DefaultData: SChangeUserIntroduce = {
	introduce : "",
    }

    static Unmarshal(buffer: Buffer): SChangeUserIntroduce { 
	const reader = new BufferReader(buffer)
try{
	SChangeUserIntroduce.DefaultData.introduce = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeUserIntroduce.DefaultData);
    }

    static Marshal(data: SChangeUserIntroduce): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.introduce)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeUserIntroduce;