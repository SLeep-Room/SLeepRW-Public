
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangeUserIntroduce {
	introduce : string;
}

class CChangeUserIntroduce {
    static DefaultData: CChangeUserIntroduce = {
	introduce : "",
    }

    static Unmarshal(buffer: Buffer): CChangeUserIntroduce { 
	const reader = new BufferReader(buffer)
try{
	CChangeUserIntroduce.DefaultData.introduce = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangeUserIntroduce.DefaultData);
    }

    static Marshal(data: CChangeUserIntroduce): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.introduce)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangeUserIntroduce;