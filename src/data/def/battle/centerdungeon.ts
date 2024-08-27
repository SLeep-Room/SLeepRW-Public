
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CEnterDungeon {
	dungeonType : number;
	id : number;
	lineupId : number;
}

class CEnterDungeon {
    static DefaultData: CEnterDungeon = {
	dungeonType : 0,
	id : 0,
	lineupId : 0,
    }

    static Unmarshal(buffer: Buffer): CEnterDungeon { 
	const reader = new BufferReader(buffer)
try{
	CEnterDungeon.DefaultData.dungeonType = reader.readInt32()
	CEnterDungeon.DefaultData.id = reader.readInt32()
	CEnterDungeon.DefaultData.lineupId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CEnterDungeon.DefaultData);
    }

    static Marshal(data: CEnterDungeon): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.dungeonType)
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.lineupId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CEnterDungeon;