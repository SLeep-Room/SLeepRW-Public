
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import monsters from '../../bean/battle/point';

interface CMonsterMove {
	sceneid : number;
	monsters : [number,typeof monsters.DefaultData][];
}

class CMonsterMove {
    static DefaultData: CMonsterMove = {
	sceneid : 0,
	monsters : [],
    }

    static Unmarshal(buffer: Buffer): CMonsterMove { 
	const reader = new BufferReader(buffer)
try{
	CMonsterMove.DefaultData.sceneid = reader.readInt32()
	const monstersLength = reader.readCompactUInt32();

	for (let i = 0; i < monstersLength; i++) {
	    CMonsterMove.DefaultData.monsters.push([reader.readInt32(),monsters.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CMonsterMove.DefaultData);
    }

    static Marshal(data: CMonsterMove): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.sceneid)
	buffer.writeCompactInt32(Object.keys(data.monsters).length);
	data.monsters.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(monsters.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CMonsterMove;