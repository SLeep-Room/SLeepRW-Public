
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import bossList from '../../bean/activity/springboss';

interface SSpringBossState {
	bossList : typeof bossList.DefaultData[];
	score : number;
	rank : number;
}

class SSpringBossState {
    static DefaultData: SSpringBossState = {
	bossList : [],
	score : 0,
	rank : 0,
    }

    static Unmarshal(buffer: Buffer): SSpringBossState { 
	const reader = new BufferReader(buffer)
try{
	const bossListLength = reader.readCompactUInt32();

	for (let i = 0; i < bossListLength; i++) {
	    SSpringBossState.DefaultData.bossList.push(bossList.Unmarshal(reader));
	}
	SSpringBossState.DefaultData.score = reader.readInt32()
	SSpringBossState.DefaultData.rank = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSpringBossState.DefaultData);
    }

    static Marshal(data: SSpringBossState): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.bossList).length);
	data.bossList.forEach((value) => {
		buffer.writeBuffer(bossList.Marshal(value))
	});
	buffer.writeInt32(data.score)
	buffer.writeInt32(data.rank)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSpringBossState;