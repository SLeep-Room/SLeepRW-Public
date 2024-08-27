
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CNewComment {
	roleId : number;
	comment : string;
}

class CNewComment {
    static DefaultData: CNewComment = {
	roleId : 0,
	comment : "",
    }

    static Unmarshal(buffer: Buffer): CNewComment { 
	const reader = new BufferReader(buffer)
try{
	CNewComment.DefaultData.roleId = reader.readInt32()
	CNewComment.DefaultData.comment = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CNewComment.DefaultData);
    }

    static Marshal(data: CNewComment): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeString(data.comment)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CNewComment;