
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveReturnCollection {
	CollectionType : number;
	level : number;
	roleId : number;
}

class CReceiveReturnCollection {
    static DefaultData: CReceiveReturnCollection = {
	CollectionType : 0,
	level : 0,
	roleId : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveReturnCollection { 
	const reader = new BufferReader(buffer)
try{
	CReceiveReturnCollection.DefaultData.CollectionType = reader.readInt32()
	CReceiveReturnCollection.DefaultData.level = reader.readInt32()
	CReceiveReturnCollection.DefaultData.roleId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveReturnCollection.DefaultData);
    }

    static Marshal(data: CReceiveReturnCollection): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.CollectionType)
	buffer.writeInt32(data.level)
	buffer.writeInt32(data.roleId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveReturnCollection;