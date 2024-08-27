
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CMusicCollectionRewardsGet {
	musicCollectionRewardsList : number[];
}

class CMusicCollectionRewardsGet {
    static DefaultData: CMusicCollectionRewardsGet = {
	musicCollectionRewardsList : [],
    }

    static Unmarshal(buffer: Buffer): CMusicCollectionRewardsGet { 
	const reader = new BufferReader(buffer)
try{
	const musicCollectionRewardsListLength = reader.readCompactUInt32();

	for (let i = 0; i < musicCollectionRewardsListLength; i++) {
	    CMusicCollectionRewardsGet.DefaultData.musicCollectionRewardsList.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CMusicCollectionRewardsGet.DefaultData);
    }

    static Marshal(data: CMusicCollectionRewardsGet): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.musicCollectionRewardsList).length);
	data.musicCollectionRewardsList.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CMusicCollectionRewardsGet;