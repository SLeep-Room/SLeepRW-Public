
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CLittleBattlePassReceiveCollection {
	CollectionType : number;
	level : number;
}

class CLittleBattlePassReceiveCollection {
    static DefaultData: CLittleBattlePassReceiveCollection = {
	CollectionType : 0,
	level : 0,
    }

    static Unmarshal(buffer: Buffer): CLittleBattlePassReceiveCollection { 
	const reader = new BufferReader(buffer)
try{
	CLittleBattlePassReceiveCollection.DefaultData.CollectionType = reader.readInt32()
	CLittleBattlePassReceiveCollection.DefaultData.level = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CLittleBattlePassReceiveCollection.DefaultData);
    }

    static Marshal(data: CLittleBattlePassReceiveCollection): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.CollectionType)
	buffer.writeInt32(data.level)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CLittleBattlePassReceiveCollection;