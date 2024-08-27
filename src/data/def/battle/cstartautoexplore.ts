
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CStartAutoExplore {
	zoneId : number;
	dungeonType : number;
}

class CStartAutoExplore {
    static DefaultData: CStartAutoExplore = {
	zoneId : 0,
	dungeonType : 0,
    }

    static Unmarshal(buffer: Buffer): CStartAutoExplore { 
	const reader = new BufferReader(buffer)
try{
	CStartAutoExplore.DefaultData.zoneId = reader.readInt32()
	CStartAutoExplore.DefaultData.dungeonType = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CStartAutoExplore.DefaultData);
    }

    static Marshal(data: CStartAutoExplore): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.zoneId)
	buffer.writeInt32(data.dungeonType)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CStartAutoExplore;