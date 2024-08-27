
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface MusicCollectionRewardsInfo {
	rewardsId : number;
	rewardsStatue : number;
}

class MusicCollectionRewardsInfo {
    static DefaultData: MusicCollectionRewardsInfo = {
	rewardsId : 0,
	rewardsStatue : 0,
    }

    static Unmarshal(buffer: BufferReader): MusicCollectionRewardsInfo { 
	const reader = buffer
try{
	MusicCollectionRewardsInfo.DefaultData.rewardsId = reader.readInt32()
	MusicCollectionRewardsInfo.DefaultData.rewardsStatue = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},MusicCollectionRewardsInfo.DefaultData);
    }

    static Marshal(data: MusicCollectionRewardsInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rewardsId)
	buffer.writeInt32(data.rewardsStatue)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default MusicCollectionRewardsInfo;