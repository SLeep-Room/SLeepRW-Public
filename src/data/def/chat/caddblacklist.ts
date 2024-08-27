
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CAddBlackList {
	userId : bigint;
}

class CAddBlackList {
    static DefaultData: CAddBlackList = {
	userId : 0n,
    }

    static Unmarshal(buffer: Buffer): CAddBlackList { 
	const reader = new BufferReader(buffer)
try{
	CAddBlackList.DefaultData.userId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CAddBlackList.DefaultData);
    }

    static Marshal(data: CAddBlackList): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CAddBlackList;