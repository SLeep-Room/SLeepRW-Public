
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import weekTasks from '../../bean/task/taskinfo';

interface SAllWeekTasks {
	activeValues : [number,number][];
	currentActiveValue : number;
	weekTasks : typeof weekTasks.DefaultData[];
}

class SAllWeekTasks {
    static DefaultData: SAllWeekTasks = {
	activeValues : [],
	currentActiveValue : 0,
	weekTasks : [],
    }

    static Unmarshal(buffer: Buffer): SAllWeekTasks { 
	const reader = new BufferReader(buffer)
try{
	const activeValuesLength = reader.readCompactUInt32();

	for (let i = 0; i < activeValuesLength; i++) {
	    SAllWeekTasks.DefaultData.activeValues.push([reader.readInt32(),reader.readInt32()]);
	}
	SAllWeekTasks.DefaultData.currentActiveValue = reader.readInt32()
	const weekTasksLength = reader.readCompactUInt32();

	for (let i = 0; i < weekTasksLength; i++) {
	    SAllWeekTasks.DefaultData.weekTasks.push(weekTasks.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAllWeekTasks.DefaultData);
    }

    static Marshal(data: SAllWeekTasks): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.activeValues).length);
	data.activeValues.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.currentActiveValue)
	buffer.writeCompactInt32(Object.keys(data.weekTasks).length);
	data.weekTasks.forEach((value) => {
		buffer.writeBuffer(weekTasks.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAllWeekTasks;