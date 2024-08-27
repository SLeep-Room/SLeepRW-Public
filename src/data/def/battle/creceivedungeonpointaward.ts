
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CReceiveDungeonPointAward {
	id : number;
}

class CReceiveDungeonPointAward {
    static DefaultData: CReceiveDungeonPointAward = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CReceiveDungeonPointAward { 
	const reader = new BufferReader(buffer)
try{
	CReceiveDungeonPointAward.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CReceiveDungeonPointAward.DefaultData);
    }

    static Marshal(data: CReceiveDungeonPointAward): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CReceiveDungeonPointAward;