
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Condition {
	conditionIndex : number;
	value : number;
	destValue : number;
}

class Condition {
    static DefaultData: Condition = {
	conditionIndex : 0,
	value : 0,
	destValue : 0,
    }

    static Unmarshal(buffer: BufferReader): Condition { 
	const reader = buffer
try{
	Condition.DefaultData.conditionIndex = reader.readInt32()
	Condition.DefaultData.value = reader.readInt32()
	Condition.DefaultData.destValue = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Condition.DefaultData);
    }

    static Marshal(data: Condition): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.conditionIndex)
	buffer.writeInt32(data.value)
	buffer.writeInt32(data.destValue)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Condition;