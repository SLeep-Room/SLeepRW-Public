
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDelateComment {
	commentKey : bigint;
	roleid : number;
	page : number;
}

class CDelateComment {
    static DefaultData: CDelateComment = {
	commentKey : 0n,
	roleid : 0,
	page : 0,
    }

    static Unmarshal(buffer: Buffer): CDelateComment { 
	const reader = new BufferReader(buffer)
try{
	CDelateComment.DefaultData.commentKey = reader.readInt64()
	CDelateComment.DefaultData.roleid = reader.readInt32()
	CDelateComment.DefaultData.page = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDelateComment.DefaultData);
    }

    static Marshal(data: CDelateComment): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.commentKey))
	buffer.writeInt32(data.roleid)
	buffer.writeInt32(data.page)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDelateComment;