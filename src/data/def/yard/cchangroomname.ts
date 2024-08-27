
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChangRoomName {
	name : string;
}

class CChangRoomName {
    static DefaultData: CChangRoomName = {
	name : "",
    }

    static Unmarshal(buffer: Buffer): CChangRoomName { 
	const reader = new BufferReader(buffer)
try{
	CChangRoomName.DefaultData.name = reader.readString()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChangRoomName.DefaultData);
    }

    static Marshal(data: CChangRoomName): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeString(data.name)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChangRoomName;