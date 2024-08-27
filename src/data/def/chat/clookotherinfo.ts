
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CLookOtherInfo {
	userId : bigint;
}

class CLookOtherInfo {
    static DefaultData: CLookOtherInfo = {
	userId : 0n,
    }

    static Unmarshal(buffer: Buffer): CLookOtherInfo { 
	const reader = new BufferReader(buffer)
try{
	CLookOtherInfo.DefaultData.userId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CLookOtherInfo.DefaultData);
    }

    static Marshal(data: CLookOtherInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CLookOtherInfo;