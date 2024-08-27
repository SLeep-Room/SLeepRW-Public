
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import checkPoint from '../../bean/battle/dungeonpoint';
import smallPoint from '../../bean/battle/dungeonpoint';

interface DungeonZone {
	isReceived : number;
	autoExplore : number;
	openedBoxes : number;
	totalBoxes : number;
	checkPoint : typeof checkPoint.DefaultData;
	smallPoint : typeof smallPoint.DefaultData[];
}

class DungeonZone {
    static DefaultData: DungeonZone = {
	isReceived : 0,
	autoExplore : 0,
	openedBoxes : 0,
	totalBoxes : 0,
	checkPoint : checkPoint.DefaultData,
	smallPoint : [],
    }

    static Unmarshal(buffer: BufferReader): DungeonZone { 
	const reader = buffer
try{
	DungeonZone.DefaultData.isReceived = reader.readInt16()
	DungeonZone.DefaultData.autoExplore = reader.readInt16()
	DungeonZone.DefaultData.openedBoxes = reader.readInt32()
	DungeonZone.DefaultData.totalBoxes = reader.readInt32()
	DungeonZone.DefaultData.checkPoint = checkPoint.Unmarshal(reader)
	const smallPointLength = reader.readCompactUInt32();

	for (let i = 0; i < smallPointLength; i++) {
	    DungeonZone.DefaultData.smallPoint.push(smallPoint.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},DungeonZone.DefaultData);
    }

    static Marshal(data: DungeonZone): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt16(data.isReceived)
	buffer.writeInt16(data.autoExplore)
	buffer.writeInt32(data.openedBoxes)
	buffer.writeInt32(data.totalBoxes)
	buffer.writeBuffer(checkPoint.Marshal(data.checkPoint))
	buffer.writeCompactInt32(Object.keys(data.smallPoint).length);
	data.smallPoint.forEach((value) => {
		buffer.writeBuffer(smallPoint.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default DungeonZone;