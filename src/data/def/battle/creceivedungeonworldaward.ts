
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveDungeonWorldAward {
	id : number;
}

class CReceiveDungeonWorldAward {
    static DefaultData: CReceiveDungeonWorldAward = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveDungeonWorldAward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveDungeonWorldAward.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveDungeonWorldAward.DefaultData);
    }

    static Marshal(data: CReceiveDungeonWorldAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveDungeonWorldAward;