
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import bossPanelData from '../../bean/ranking/bosspaneldata';
import baseUserData from '../../bean/chat/baseuserdata';

interface BossChallenge {
	rank : number;
	bossPanelData : typeof bossPanelData.DefaultData;
	baseUserData : typeof baseUserData.DefaultData;
}

class BossChallenge {
    static DefaultData: BossChallenge = {
	rank : 0,
	bossPanelData : bossPanelData.DefaultData,
	baseUserData : baseUserData.DefaultData,
    }

    static Unmarshal(buffer: BufferReader): BossChallenge { 
	const reader = buffer
try{
	BossChallenge.DefaultData.rank = reader.readInt32()
	BossChallenge.DefaultData.bossPanelData = bossPanelData.Unmarshal(reader)
	BossChallenge.DefaultData.baseUserData = baseUserData.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},BossChallenge.DefaultData);
    }

    static Marshal(data: BossChallenge): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rank)
	buffer.writeBuffer(bossPanelData.Marshal(data.bossPanelData))
	buffer.writeBuffer(baseUserData.Marshal(data.baseUserData))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default BossChallenge;