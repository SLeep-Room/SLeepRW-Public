
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SWeekBossTalent {
	leftNum : number;
	unlockedTalentNode : number[];
}

class SWeekBossTalent {
    static DefaultData: SWeekBossTalent = {
	leftNum : 0,
	unlockedTalentNode : [],
    }

    static Unmarshal(buffer: Buffer): SWeekBossTalent { 
	const reader = new BufferReader(buffer)
try{
	SWeekBossTalent.DefaultData.leftNum = reader.readInt32()
	const unlockedTalentNodeLength = reader.readCompactUInt32();

	for (let i = 0; i < unlockedTalentNodeLength; i++) {
	    SWeekBossTalent.DefaultData.unlockedTalentNode.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SWeekBossTalent.DefaultData);
    }

    static Marshal(data: SWeekBossTalent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.leftNum)
	buffer.writeCompactInt32(Object.keys(data.unlockedTalentNode).length);
	data.unlockedTalentNode.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SWeekBossTalent;