
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRecoverBlackList {
	userId : bigint;
}

class CRecoverBlackList {
    static DefaultData: CRecoverBlackList = {
	userId : 0n,
    }

    static Unmarshal(buffer: Buffer): CRecoverBlackList { 
	const reader = new BufferReader(buffer)
try{
	CRecoverBlackList.DefaultData.userId = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRecoverBlackList.DefaultData);
    }

    static Marshal(data: CRecoverBlackList): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.userId))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRecoverBlackList;