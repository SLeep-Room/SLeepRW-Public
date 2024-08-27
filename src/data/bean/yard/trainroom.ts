
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import trainList from '../../bean/yard/train';

interface TrainRoom {
	id : number;
	level : number;
	trainList : typeof trainList.DefaultData[];
}

class TrainRoom {
    static DefaultData: TrainRoom = {
	id : 0,
	level : 0,
	trainList : [],
    }

    static Unmarshal(buffer: BufferReader): TrainRoom { 
	const reader = buffer
try{
	TrainRoom.DefaultData.id = reader.readInt32()
	TrainRoom.DefaultData.level = reader.readInt32()
	const trainListLength = reader.readCompactUInt32();

	for (let i = 0; i < trainListLength; i++) {
	    TrainRoom.DefaultData.trainList.push(trainList.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},TrainRoom.DefaultData);
    }

    static Marshal(data: TrainRoom): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.level)
	buffer.writeCompactInt32(Object.keys(data.trainList).length);
	data.trainList.forEach((value) => {
		buffer.writeBuffer(trainList.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default TrainRoom;