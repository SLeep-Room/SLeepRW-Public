
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUpdateTowerLineupStatue {
	lineupID : number;
	rolesState : [number,number][];
}

class SUpdateTowerLineupStatue {
    static DefaultData: SUpdateTowerLineupStatue = {
	lineupID : 0,
	rolesState : [],
    }

    static Unmarshal(buffer: Buffer): SUpdateTowerLineupStatue { 
	const reader = new BufferReader(buffer)
try{
	SUpdateTowerLineupStatue.DefaultData.lineupID = reader.readInt32()
	const rolesStateLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesStateLength; i++) {
	    SUpdateTowerLineupStatue.DefaultData.rolesState.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUpdateTowerLineupStatue.DefaultData);
    }

    static Marshal(data: SUpdateTowerLineupStatue): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.lineupID)
	buffer.writeCompactInt32(Object.keys(data.rolesState).length);
	data.rolesState.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUpdateTowerLineupStatue;