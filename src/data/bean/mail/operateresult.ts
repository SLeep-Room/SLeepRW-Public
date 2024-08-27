
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface OperateResult {
	uniqueId : bigint;
	result : number;
}

class OperateResult {
    static DefaultData: OperateResult = {
	uniqueId : 0n,
	result : 0,
    }

    static Unmarshal(buffer: BufferReader): OperateResult { 
	const reader = buffer
try{
	OperateResult.DefaultData.uniqueId = reader.readInt64()
	OperateResult.DefaultData.result = reader.readInt16()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},OperateResult.DefaultData);
    }

    static Marshal(data: OperateResult): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.uniqueId))
	buffer.writeInt16(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default OperateResult;