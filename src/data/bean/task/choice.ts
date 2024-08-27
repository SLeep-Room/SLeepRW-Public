
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface Choice {
	taskid : number;
	choices : string[];
}

class Choice {
    static DefaultData: Choice = {
	taskid : 0,
	choices : [],
    }

    static Unmarshal(buffer: BufferReader): Choice { 
	const reader = buffer
try{
	Choice.DefaultData.taskid = reader.readInt32()
	const choicesLength = reader.readCompactUInt32();

	for (let i = 0; i < choicesLength; i++) {
	    Choice.DefaultData.choices.push(reader.readString());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Choice.DefaultData);
    }

    static Marshal(data: Choice): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.taskid)
	buffer.writeCompactInt32(Object.keys(data.choices).length);
	data.choices.forEach((value) => {
		buffer.writeString(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Choice;