
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUnlockTalent {
	roleId : number;
	talentPage : number;
	talentRow : number;
	talentInRow : number[];
}

class SUnlockTalent {
    static DefaultData: SUnlockTalent = {
	roleId : 0,
	talentPage : 0,
	talentRow : 0,
	talentInRow : [],
    }

    static Unmarshal(buffer: Buffer): SUnlockTalent { 
	const reader = new BufferReader(buffer)
try{
	SUnlockTalent.DefaultData.roleId = reader.readInt32()
	SUnlockTalent.DefaultData.talentPage = reader.readInt32()
	SUnlockTalent.DefaultData.talentRow = reader.readInt32()
	const talentInRowLength = reader.readCompactUInt32();

	for (let i = 0; i < talentInRowLength; i++) {
	    SUnlockTalent.DefaultData.talentInRow.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUnlockTalent.DefaultData);
    }

    static Marshal(data: SUnlockTalent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.talentPage)
	buffer.writeInt32(data.talentRow)
	buffer.writeCompactInt32(Object.keys(data.talentInRow).length);
	data.talentInRow.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUnlockTalent;