
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import openCards from '../../bean/activity/unlockitem';

interface SOpenDoubleElevenActivity {
	poolId : number;
	openCards : [number,typeof openCards.DefaultData][];
}

class SOpenDoubleElevenActivity {
    static DefaultData: SOpenDoubleElevenActivity = {
	poolId : 0,
	openCards : [],
    }

    static Unmarshal(buffer: Buffer): SOpenDoubleElevenActivity { 
	const reader = new BufferReader(buffer)
try{
	SOpenDoubleElevenActivity.DefaultData.poolId = reader.readInt32()
	const openCardsLength = reader.readCompactUInt32();

	for (let i = 0; i < openCardsLength; i++) {
	    SOpenDoubleElevenActivity.DefaultData.openCards.push([reader.readInt32(),openCards.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenDoubleElevenActivity.DefaultData);
    }

    static Marshal(data: SOpenDoubleElevenActivity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.poolId)
	buffer.writeCompactInt32(Object.keys(data.openCards).length);
	data.openCards.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(openCards.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenDoubleElevenActivity;