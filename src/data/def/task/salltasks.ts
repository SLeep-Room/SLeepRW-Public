
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import majorTasks from '../../bean/task/taskinfo';
import branchTasks from '../../bean/task/taskinfo';
import dailyTasks from '../../bean/task/taskinfo';
import characterTasks from '../../bean/task/taskinfo';
import achieveTasks from '../../bean/task/taskinfo';
import weekBossTasks from '../../bean/task/taskinfo';
import taskChoices from '../../bean/task/choice';

interface SAllTasks {
	majorTasks : typeof majorTasks.DefaultData[];
	branchTasks : typeof branchTasks.DefaultData[];
	dailyTasks : typeof dailyTasks.DefaultData[];
	characterTasks : typeof characterTasks.DefaultData[];
	achieveTasks : typeof achieveTasks.DefaultData[];
	weekBossTasks : typeof weekBossTasks.DefaultData[];
	taskChoices : typeof taskChoices.DefaultData[];
}

class SAllTasks {
    static DefaultData: SAllTasks = {
	majorTasks : [],
	branchTasks : [],
	dailyTasks : [],
	characterTasks : [],
	achieveTasks : [],
	weekBossTasks : [],
	taskChoices : [],
    }

    static Unmarshal(buffer: Buffer): SAllTasks { 
	const reader = new BufferReader(buffer)
try{
	const majorTasksLength = reader.readCompactUInt32();

	for (let i = 0; i < majorTasksLength; i++) {
	    SAllTasks.DefaultData.majorTasks.push(majorTasks.Unmarshal(reader));
	}
	const branchTasksLength = reader.readCompactUInt32();

	for (let i = 0; i < branchTasksLength; i++) {
	    SAllTasks.DefaultData.branchTasks.push(branchTasks.Unmarshal(reader));
	}
	const dailyTasksLength = reader.readCompactUInt32();

	for (let i = 0; i < dailyTasksLength; i++) {
	    SAllTasks.DefaultData.dailyTasks.push(dailyTasks.Unmarshal(reader));
	}
	const characterTasksLength = reader.readCompactUInt32();

	for (let i = 0; i < characterTasksLength; i++) {
	    SAllTasks.DefaultData.characterTasks.push(characterTasks.Unmarshal(reader));
	}
	const achieveTasksLength = reader.readCompactUInt32();

	for (let i = 0; i < achieveTasksLength; i++) {
	    SAllTasks.DefaultData.achieveTasks.push(achieveTasks.Unmarshal(reader));
	}
	const weekBossTasksLength = reader.readCompactUInt32();

	for (let i = 0; i < weekBossTasksLength; i++) {
	    SAllTasks.DefaultData.weekBossTasks.push(weekBossTasks.Unmarshal(reader));
	}
	const taskChoicesLength = reader.readCompactUInt32();

	for (let i = 0; i < taskChoicesLength; i++) {
	    SAllTasks.DefaultData.taskChoices.push(taskChoices.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAllTasks.DefaultData);
    }

    static Marshal(data: SAllTasks): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.majorTasks).length);
	data.majorTasks.forEach((value) => {
		buffer.writeBuffer(majorTasks.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.branchTasks).length);
	data.branchTasks.forEach((value) => {
		buffer.writeBuffer(branchTasks.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.dailyTasks).length);
	data.dailyTasks.forEach((value) => {
		buffer.writeBuffer(dailyTasks.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.characterTasks).length);
	data.characterTasks.forEach((value) => {
		buffer.writeBuffer(characterTasks.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.achieveTasks).length);
	data.achieveTasks.forEach((value) => {
		buffer.writeBuffer(achieveTasks.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.weekBossTasks).length);
	data.weekBossTasks.forEach((value) => {
		buffer.writeBuffer(weekBossTasks.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.taskChoices).length);
	data.taskChoices.forEach((value) => {
		buffer.writeBuffer(taskChoices.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SAllTasks;