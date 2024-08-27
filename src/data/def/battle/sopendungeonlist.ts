
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import world from '../../bean/battle/dungeonworld';

interface SOpenDungeonList {
	world : [number,typeof world.DefaultData][];
}

class SOpenDungeonList {
    static DefaultData: SOpenDungeonList = {
	world : [],
    }

    static Unmarshal(buffer: Buffer): SOpenDungeonList { 
	const reader = new BufferReader(buffer)
try{
	const worldLength = reader.readCompactUInt32();

	for (let i = 0; i < worldLength; i++) {
	    SOpenDungeonList.DefaultData.world.push([reader.readInt32(),world.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenDungeonList.DefaultData);
    }

    static Marshal(data: SOpenDungeonList): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.world).length);
	data.world.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(world.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenDungeonList;