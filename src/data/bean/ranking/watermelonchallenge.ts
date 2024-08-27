
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import watermelonPanelData from '../../bean/ranking/watermelonpaneldata';
import baseUserData from '../../bean/chat/baseuserdata';

interface WatermelonChallenge {
	rank : number;
	watermelonPanelData : typeof watermelonPanelData.DefaultData;
	baseUserData : typeof baseUserData.DefaultData;
}

class WatermelonChallenge {
    static DefaultData: WatermelonChallenge = {
	rank : 0,
	watermelonPanelData : watermelonPanelData.DefaultData,
	baseUserData : baseUserData.DefaultData,
    }

    static Unmarshal(buffer: BufferReader): WatermelonChallenge { 
	const reader = buffer
try{
	WatermelonChallenge.DefaultData.rank = reader.readInt32()
	WatermelonChallenge.DefaultData.watermelonPanelData = watermelonPanelData.Unmarshal(reader)
	WatermelonChallenge.DefaultData.baseUserData = baseUserData.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},WatermelonChallenge.DefaultData);
    }

    static Marshal(data: WatermelonChallenge): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rank)
	buffer.writeBuffer(watermelonPanelData.Marshal(data.watermelonPanelData))
	buffer.writeBuffer(baseUserData.Marshal(data.baseUserData))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default WatermelonChallenge;