
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import room from '../../bean/yard/witchroom';

interface SRefreshRoom {
	room : typeof room.DefaultData;
}

class SRefreshRoom {
    static DefaultData: SRefreshRoom = {
	room : room.DefaultData,
    }

    static Unmarshal(buffer: Buffer): SRefreshRoom { 
	const reader = new BufferReader(buffer)
try{
	SRefreshRoom.DefaultData.room = room.Unmarshal(reader)} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshRoom.DefaultData);
    }

    static Marshal(data: SRefreshRoom): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeBuffer(room.Marshal(data.room))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshRoom;