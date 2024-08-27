
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUnlockFoolsDaysFunction {
	functionId : number;
}

class SUnlockFoolsDaysFunction {
    static DefaultData: SUnlockFoolsDaysFunction = {
	functionId : 0,
    }

    static Unmarshal(buffer: Buffer): SUnlockFoolsDaysFunction { 
	const reader = new BufferReader(buffer)
try{
	SUnlockFoolsDaysFunction.DefaultData.functionId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUnlockFoolsDaysFunction.DefaultData);
    }

    static Marshal(data: SUnlockFoolsDaysFunction): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.functionId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUnlockFoolsDaysFunction;