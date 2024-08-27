
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SChangeRoomName {
	name : string;
}

class SChangeRoomName {
    static DefaultData: SChangeRoomName = {
	name : "",
    }

    static Unmarshal(buffer: Buffer): SChangeRoomName { 
	const reader = new BufferReader(buffer)
try{
	SChangeRoomName.DefaultData.name = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SChangeRoomName.DefaultData);
    }

    static Marshal(data: SChangeRoomName): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.name)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SChangeRoomName;