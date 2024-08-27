
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import enemyUserData from '../../bean/chat/baseuserdata';
import enemyRoleList from '../../bean/ranking/role';

interface EnemyLineup {
	battleId : number;
	enemyUserData : typeof enemyUserData.DefaultData;
	enemyRoleList : [number,typeof enemyRoleList.DefaultData][];
}

class EnemyLineup {
    static DefaultData: EnemyLineup = {
	battleId : 0,
	enemyUserData : enemyUserData.DefaultData,
	enemyRoleList : [],
    }

    static Unmarshal(buffer: BufferReader): EnemyLineup { 
	const reader = buffer
try{
	EnemyLineup.DefaultData.battleId = reader.readInt32()
	EnemyLineup.DefaultData.enemyUserData = enemyUserData.Unmarshal(reader)
	const enemyRoleListLength = reader.readCompactUInt32();

	for (let i = 0; i < enemyRoleListLength; i++) {
	    EnemyLineup.DefaultData.enemyRoleList.push([reader.readInt32(),enemyRoleList.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},EnemyLineup.DefaultData);
    }

    static Marshal(data: EnemyLineup): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.battleId)
	buffer.writeBuffer(enemyUserData.Marshal(data.enemyUserData))
	buffer.writeCompactInt32(Object.keys(data.enemyRoleList).length);
	data.enemyRoleList.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(enemyRoleList.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default EnemyLineup;