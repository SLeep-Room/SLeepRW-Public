
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CGetComments {
	roleId : number;
	commentType : number;
	lastIndex : number;
}

class CGetComments {
    static DefaultData: CGetComments = {
	roleId : 0,
	commentType : 0,
	lastIndex : 0,
    }

    static Unmarshal(buffer: Buffer): CGetComments { 
	const reader = new BufferReader(buffer)
try{
	CGetComments.DefaultData.roleId = reader.readInt32()
	CGetComments.DefaultData.commentType = reader.readInt32()
	CGetComments.DefaultData.lastIndex = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CGetComments.DefaultData);
    }

    static Marshal(data: CGetComments): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.commentType)
	buffer.writeInt32(data.lastIndex)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CGetComments;