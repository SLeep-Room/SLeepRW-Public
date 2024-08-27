
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import musicCollectionRewardsStates from '../../bean/yard/musiccollectionrewardsinfo';

interface SMusicCollectionRewardsAchieved {
	musicCollectionRewardsStates : typeof musicCollectionRewardsStates.DefaultData[];
}

class SMusicCollectionRewardsAchieved {
    static DefaultData: SMusicCollectionRewardsAchieved = {
	musicCollectionRewardsStates : [],
    }

    static Unmarshal(buffer: Buffer): SMusicCollectionRewardsAchieved { 
	const reader = new BufferReader(buffer)
try{
	const musicCollectionRewardsStatesLength = reader.readCompactUInt32();

	for (let i = 0; i < musicCollectionRewardsStatesLength; i++) {
	    SMusicCollectionRewardsAchieved.DefaultData.musicCollectionRewardsStates.push(musicCollectionRewardsStates.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SMusicCollectionRewardsAchieved.DefaultData);
    }

    static Marshal(data: SMusicCollectionRewardsAchieved): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.musicCollectionRewardsStates).length);
	data.musicCollectionRewardsStates.forEach((value) => {
		buffer.writeBuffer(musicCollectionRewardsStates.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SMusicCollectionRewardsAchieved;