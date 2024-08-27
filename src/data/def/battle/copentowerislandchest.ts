
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface COpenTowerIslandChest {
	islandID : number;
	choice : number;
}

class COpenTowerIslandChest {
    static DefaultData: COpenTowerIslandChest = {
	islandID : 0,
	choice : 0,
    }

    static Unmarshal(buffer: Buffer): COpenTowerIslandChest { 
	const reader = new BufferReader(buffer)
try{
	COpenTowerIslandChest.DefaultData.islandID = reader.readInt32()
	COpenTowerIslandChest.DefaultData.choice = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},COpenTowerIslandChest.DefaultData);
    }

    static Marshal(data: COpenTowerIslandChest): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.islandID)
	buffer.writeInt32(data.choice)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default COpenTowerIslandChest;