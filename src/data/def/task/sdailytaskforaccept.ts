
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import dailyTasks from '../../bean/task/taskinfo';

interface SDailyTaskForAccept {
	dailyRefreshTime : number;
	totalRefresh : number;
	activeValues : [number,number][];
	currentActiveValue : number;
	dailyTasks : typeof dailyTasks.DefaultData[];
}

class SDailyTaskForAccept {
    static DefaultData: SDailyTaskForAccept = {
	dailyRefreshTime : 0,
	totalRefresh : 0,
	activeValues : [],
	currentActiveValue : 0,
	dailyTasks : [],
    }

    static Unmarshal(buffer: Buffer): SDailyTaskForAccept { 
	const reader = new BufferReader(buffer)
try{
	SDailyTaskForAccept.DefaultData.dailyRefreshTime = reader.readInt32()
	SDailyTaskForAccept.DefaultData.totalRefresh = reader.readInt32()
	const activeValuesLength = reader.readCompactUInt32();

	for (let i = 0; i < activeValuesLength; i++) {
	    SDailyTaskForAccept.DefaultData.activeValues.push([reader.readInt32(),reader.readInt32()]);
	}
	SDailyTaskForAccept.DefaultData.currentActiveValue = reader.readInt32()
	const dailyTasksLength = reader.readCompactUInt32();

	for (let i = 0; i < dailyTasksLength; i++) {
	    SDailyTaskForAccept.DefaultData.dailyTasks.push(dailyTasks.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SDailyTaskForAccept.DefaultData);
    }

    static Marshal(data: SDailyTaskForAccept): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.dailyRefreshTime)
	buffer.writeInt32(data.totalRefresh)
	buffer.writeCompactInt32(Object.keys(data.activeValues).length);
	data.activeValues.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.currentActiveValue)
	buffer.writeCompactInt32(Object.keys(data.dailyTasks).length);
	data.dailyTasks.forEach((value) => {
		buffer.writeBuffer(dailyTasks.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SDailyTaskForAccept;