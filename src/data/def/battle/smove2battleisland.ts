
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import enemy from '../../bean/battle/islandmonsterinfo';

interface SMove2BattleIsland {
	islandID : number;
	enemy : typeof enemy.DefaultData[];
}

class SMove2BattleIsland {
    static DefaultData: SMove2BattleIsland = {
	islandID : 0,
	enemy : [],
    }

    static Unmarshal(buffer: Buffer): SMove2BattleIsland { 
	const reader = new BufferReader(buffer)
try{
	SMove2BattleIsland.DefaultData.islandID = reader.readInt32()
	const enemyLength = reader.readCompactUInt32();

	for (let i = 0; i < enemyLength; i++) {
	    SMove2BattleIsland.DefaultData.enemy.push(enemy.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SMove2BattleIsland.DefaultData);
    }

    static Marshal(data: SMove2BattleIsland): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.islandID)
	buffer.writeCompactInt32(Object.keys(data.enemy).length);
	data.enemy.forEach((value) => {
		buffer.writeBuffer(enemy.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SMove2BattleIsland;