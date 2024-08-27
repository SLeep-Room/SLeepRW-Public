
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import zone from '../../bean/battle/dungeonzone';

interface DungeonWorld {
	curZone : number;
	clearZones : number;
	totalZones : number;
	isReceived : number;
	zone : [number,typeof zone.DefaultData][];
}

class DungeonWorld {
    static DefaultData: DungeonWorld = {
	curZone : 0,
	clearZones : 0,
	totalZones : 0,
	isReceived : 0,
	zone : [],
    }

    static Unmarshal(buffer: BufferReader): DungeonWorld { 
	const reader = buffer
try{
	DungeonWorld.DefaultData.curZone = reader.readInt32()
	DungeonWorld.DefaultData.clearZones = reader.readInt32()
	DungeonWorld.DefaultData.totalZones = reader.readInt32()
	DungeonWorld.DefaultData.isReceived = reader.readInt16()
	const zoneLength = reader.readCompactUInt32();

	for (let i = 0; i < zoneLength; i++) {
	    DungeonWorld.DefaultData.zone.push([reader.readInt32(),zone.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},DungeonWorld.DefaultData);
    }

    static Marshal(data: DungeonWorld): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.curZone)
	buffer.writeInt32(data.clearZones)
	buffer.writeInt32(data.totalZones)
	buffer.writeInt16(data.isReceived)
	buffer.writeCompactInt32(Object.keys(data.zone).length);
	data.zone.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(zone.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default DungeonWorld;