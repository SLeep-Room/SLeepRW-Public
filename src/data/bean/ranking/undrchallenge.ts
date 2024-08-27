
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import undrPanelData from '../../bean/ranking/undecidedroadpaneldata';
import baseUserData from '../../bean/chat/baseuserdata';

interface UNDRChallenge {
	rank : number;
	undrPanelData : typeof undrPanelData.DefaultData;
	baseUserData : typeof baseUserData.DefaultData;
}

class UNDRChallenge {
    static DefaultData: UNDRChallenge = {
	rank : 0,
	undrPanelData : undrPanelData.DefaultData,
	baseUserData : baseUserData.DefaultData,
    }

    static Unmarshal(buffer: BufferReader): UNDRChallenge { 
	const reader = buffer
try{
	UNDRChallenge.DefaultData.rank = reader.readInt32()
	UNDRChallenge.DefaultData.undrPanelData = undrPanelData.Unmarshal(reader)
	UNDRChallenge.DefaultData.baseUserData = baseUserData.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},UNDRChallenge.DefaultData);
    }

    static Marshal(data: UNDRChallenge): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.rank)
	buffer.writeBuffer(undrPanelData.Marshal(data.undrPanelData))
	buffer.writeBuffer(baseUserData.Marshal(data.baseUserData))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default UNDRChallenge;