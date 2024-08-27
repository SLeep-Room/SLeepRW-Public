
import {Buffer} from 'buffer'
import BufferWriter from '../../../../util/buffer/BufferWriter';
import BufferReader from '../../../../util/buffer/BufferReader';

interface SkillItem {
	skillItemId : number;
	skillLevel : number;
	power : number;
	selected : number;
}

class SkillItem {
    static DefaultData: SkillItem = {
	skillItemId : 0,
	skillLevel : 0,
	power : 0,
	selected : 0,
    }

    static Unmarshal(buffer: BufferReader): SkillItem { 
	const reader = buffer
try{
	SkillItem.DefaultData.skillItemId = reader.readInt32()
	SkillItem.DefaultData.skillLevel = reader.readInt32()
	SkillItem.DefaultData.power = reader.readInt32()
	SkillItem.DefaultData.selected = reader.readInt16()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SkillItem.DefaultData);
    }

    static Marshal(data: SkillItem): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.skillItemId)
	buffer.writeInt32(data.skillLevel)
	buffer.writeInt32(data.power)
	buffer.writeInt16(data.selected)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SkillItem;