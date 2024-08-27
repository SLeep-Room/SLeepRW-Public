
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import tasks from '../../bean/yard/task';

interface MagicTree {
	level : number;
	tasks : [number,typeof tasks.DefaultData][];
	speed : number;
}

class MagicTree {
    static DefaultData: MagicTree = {
	level : 0,
	tasks : [],
	speed : 0,
    }

    static Unmarshal(buffer: BufferReader): MagicTree { 
	const reader = buffer
try{
	MagicTree.DefaultData.level = reader.readInt32()
	const tasksLength = reader.readCompactUInt32();

	for (let i = 0; i < tasksLength; i++) {
	    MagicTree.DefaultData.tasks.push([reader.readInt32(),tasks.Unmarshal(reader)]);
	}
	MagicTree.DefaultData.speed = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},MagicTree.DefaultData);
    }

    static Marshal(data: MagicTree): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.level)
	buffer.writeCompactInt32(Object.keys(data.tasks).length);
	data.tasks.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(tasks.Marshal(value))
	});
	buffer.writeInt32(data.speed)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default MagicTree;