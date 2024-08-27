
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import room from '../../bean/yard/trainroom';

interface SRefreshTrainRoom {
	room : typeof room.DefaultData;
}

class SRefreshTrainRoom {
    static DefaultData: SRefreshTrainRoom = {
	room : room.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SRefreshTrainRoom { 
	const reader = new BufferReader(buffer)
try{
	SRefreshTrainRoom.DefaultData.room = room.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshTrainRoom.DefaultData);
    }

    static Marshal(data: SRefreshTrainRoom): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(room.Marshal(data.room))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshTrainRoom;