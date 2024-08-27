
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCompleteTrain {
	index : number;
}

class CCompleteTrain {
    static DefaultData: CCompleteTrain = {
	index : 0,
    }

    static Unmarshal(buffer: Buffer): CCompleteTrain { 
	const reader = new BufferReader(buffer)
try{
	CCompleteTrain.DefaultData.index = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCompleteTrain.DefaultData);
    }

    static Marshal(data: CCompleteTrain): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.index)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCompleteTrain;