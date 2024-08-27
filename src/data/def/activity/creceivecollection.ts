
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveCollection {
	CollectionType : number;
	level : number;
}

class CReceiveCollection {
    static DefaultData: CReceiveCollection = {
	CollectionType : 0,
	level : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveCollection { 
	const reader = new BufferReader(buffer)
try{
	CReceiveCollection.DefaultData.CollectionType = reader.readInt32()
	CReceiveCollection.DefaultData.level = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveCollection.DefaultData);
    }

    static Marshal(data: CReceiveCollection): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.CollectionType)
	buffer.writeInt32(data.level)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveCollection;