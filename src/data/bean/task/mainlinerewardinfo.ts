
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface MainLineRewardInfo {
	mainLineId : number;
	mainLineState : number;
}

class MainLineRewardInfo {
    static DefaultData: MainLineRewardInfo = {
	mainLineId : 0,
	mainLineState : 0,
    }

    static Unmarshal(buffer: BufferReader): MainLineRewardInfo { 
	const reader = buffer
try{
	MainLineRewardInfo.DefaultData.mainLineId = reader.readInt32()
	MainLineRewardInfo.DefaultData.mainLineState = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},MainLineRewardInfo.DefaultData);
    }

    static Marshal(data: MainLineRewardInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.mainLineId)
	buffer.writeInt32(data.mainLineState)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default MainLineRewardInfo;