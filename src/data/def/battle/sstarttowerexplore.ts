
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import mapList from '../../bean/battle/squreinfo';

interface SStartTowerExplore {
	mapList : typeof mapList.DefaultData[];
	mapShowType : number;
	playerPos : number;
	linueupStatue : [number,number][];
	currentTowerFloor : number;
	totalFloors : number;
	towerFloorId : number;
	towerID : number;
}

class SStartTowerExplore {
    static DefaultData: SStartTowerExplore = {
	mapList : [],
	mapShowType : 0,
	playerPos : 0,
	linueupStatue : [],
	currentTowerFloor : 0,
	totalFloors : 0,
	towerFloorId : 0,
	towerID : 0,
    }

    static Unmarshal(buffer: Buffer): SStartTowerExplore { 
	const reader = new BufferReader(buffer)
try{
	const mapListLength = reader.readCompactUInt32();

	for (let i = 0; i < mapListLength; i++) {
	    SStartTowerExplore.DefaultData.mapList.push(mapList.Unmarshal(reader));
	}
	SStartTowerExplore.DefaultData.mapShowType = reader.readInt32()
	SStartTowerExplore.DefaultData.playerPos = reader.readInt32()
	const linueupStatueLength = reader.readCompactUInt32();

	for (let i = 0; i < linueupStatueLength; i++) {
	    SStartTowerExplore.DefaultData.linueupStatue.push([reader.readInt32(),reader.readInt32()]);
	}
	SStartTowerExplore.DefaultData.currentTowerFloor = reader.readInt32()
	SStartTowerExplore.DefaultData.totalFloors = reader.readInt32()
	SStartTowerExplore.DefaultData.towerFloorId = reader.readInt32()
	SStartTowerExplore.DefaultData.towerID = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SStartTowerExplore.DefaultData);
    }

    static Marshal(data: SStartTowerExplore): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.mapList).length);
	data.mapList.forEach((value) => {
		buffer.writeBuffer(mapList.Marshal(value))
	});
	buffer.writeInt32(data.mapShowType)
	buffer.writeInt32(data.playerPos)
	buffer.writeCompactInt32(Object.keys(data.linueupStatue).length);
	data.linueupStatue.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.currentTowerFloor)
	buffer.writeInt32(data.totalFloors)
	buffer.writeInt32(data.towerFloorId)
	buffer.writeInt32(data.towerID)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SStartTowerExplore;