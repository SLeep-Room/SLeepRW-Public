
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import tasks from '../../bean/yard/caverntask';

interface Cavern {
	level : number;
	tasks : [number,typeof tasks.DefaultData][];
	refreshNums : number;
	leftRefreshTime : bigint;
}

class Cavern {
    static DefaultData: Cavern = {
	level : 0,
	tasks : [],
	refreshNums : 0,
	leftRefreshTime : 0n,
    }

    static Unmarshal(buffer: BufferReader): Cavern { 
	const reader = buffer
try{
	Cavern.DefaultData.level = reader.readInt32()
	const tasksLength = reader.readCompactUInt32();

	for (let i = 0; i < tasksLength; i++) {
	    Cavern.DefaultData.tasks.push([reader.readInt32(),tasks.Unmarshal(reader)]);
	}
	Cavern.DefaultData.refreshNums = reader.readInt32()
	Cavern.DefaultData.leftRefreshTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},Cavern.DefaultData);
    }

    static Marshal(data: Cavern): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.level)
	buffer.writeCompactInt32(Object.keys(data.tasks).length);
	data.tasks.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(tasks.Marshal(value))
	});
	buffer.writeInt32(data.refreshNums)
	buffer.writeInt64(BigInt(data.leftRefreshTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default Cavern;