
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenTowerList {
	towerUnlock : [number,number][];
	chanceLeft : number;
	totalChance : number;
	challenging : number;
	challengingFloor : number;
	resetTimeLeft : bigint;
}

class SOpenTowerList {
    static DefaultData: SOpenTowerList = {
	towerUnlock : [],
	chanceLeft : 0,
	totalChance : 0,
	challenging : 0,
	challengingFloor : 0,
	resetTimeLeft : 0n,
    }

    static Unmarshal(buffer: Buffer): SOpenTowerList { 
	const reader = new BufferReader(buffer)
try{
	const towerUnlockLength = reader.readCompactUInt32();

	for (let i = 0; i < towerUnlockLength; i++) {
	    SOpenTowerList.DefaultData.towerUnlock.push([reader.readInt32(),reader.readInt32()]);
	}
	SOpenTowerList.DefaultData.chanceLeft = reader.readInt32()
	SOpenTowerList.DefaultData.totalChance = reader.readInt32()
	SOpenTowerList.DefaultData.challenging = reader.readInt32()
	SOpenTowerList.DefaultData.challengingFloor = reader.readInt32()
	SOpenTowerList.DefaultData.resetTimeLeft = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenTowerList.DefaultData);
    }

    static Marshal(data: SOpenTowerList): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.towerUnlock).length);
	data.towerUnlock.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.chanceLeft)
	buffer.writeInt32(data.totalChance)
	buffer.writeInt32(data.challenging)
	buffer.writeInt32(data.challengingFloor)
	buffer.writeInt64(BigInt(data.resetTimeLeft))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenTowerList;