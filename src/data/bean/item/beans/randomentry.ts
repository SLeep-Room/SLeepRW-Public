
import {Buffer} from 'buffer'
import BufferWriter from '../../../../util/buffer/BufferWriter';
import BufferReader from '../../../../util/buffer/BufferReader';

interface RandomEntry {
	index : number;
	randomId : number;
	kind : number;
	attr : number;
	attrValue : number;
	skill : number;
}

class RandomEntry {
    static DefaultData: RandomEntry = {
	index : 0,
	randomId : 0,
	kind : 0,
	attr : 0,
	attrValue : 0,
	skill : 0,
    }

    static Unmarshal(buffer: BufferReader): RandomEntry { 
	const reader = buffer
try{
	RandomEntry.DefaultData.index = reader.readInt32()
	RandomEntry.DefaultData.randomId = reader.readInt32()
	RandomEntry.DefaultData.kind = reader.readInt32()
	RandomEntry.DefaultData.attr = reader.readInt32()
	RandomEntry.DefaultData.attrValue = reader.readInt32()
	RandomEntry.DefaultData.skill = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},RandomEntry.DefaultData);
    }

    static Marshal(data: RandomEntry): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.index)
	buffer.writeInt32(data.randomId)
	buffer.writeInt32(data.kind)
	buffer.writeInt32(data.attr)
	buffer.writeInt32(data.attrValue)
	buffer.writeInt32(data.skill)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default RandomEntry;