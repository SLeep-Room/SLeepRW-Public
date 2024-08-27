
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SqureInfo {
	squreType : number;
	squreShow : number;
	eventID : string;
	rPos : number;
	lPos : number;
	north : number;
	sorth : number;
	east : number;
	west : number;
	squreState : number;
}

class SqureInfo {
    static DefaultData: SqureInfo = {
	squreType : 0,
	squreShow : 0,
	eventID : "",
	rPos : 0,
	lPos : 0,
	north : 0,
	sorth : 0,
	east : 0,
	west : 0,
	squreState : 0,
    }

    static Unmarshal(buffer: BufferReader): SqureInfo { 
	const reader = buffer
try{
	SqureInfo.DefaultData.squreType = reader.readInt32()
	SqureInfo.DefaultData.squreShow = reader.readInt32()
	SqureInfo.DefaultData.eventID = reader.readString()
	SqureInfo.DefaultData.rPos = reader.readInt32()
	SqureInfo.DefaultData.lPos = reader.readInt32()
	SqureInfo.DefaultData.north = reader.readInt32()
	SqureInfo.DefaultData.sorth = reader.readInt32()
	SqureInfo.DefaultData.east = reader.readInt32()
	SqureInfo.DefaultData.west = reader.readInt32()
	SqureInfo.DefaultData.squreState = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SqureInfo.DefaultData);
    }

    static Marshal(data: SqureInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.squreType)
	buffer.writeInt32(data.squreShow)
	buffer.writeString(data.eventID)
	buffer.writeInt32(data.rPos)
	buffer.writeInt32(data.lPos)
	buffer.writeInt32(data.north)
	buffer.writeInt32(data.sorth)
	buffer.writeInt32(data.east)
	buffer.writeInt32(data.west)
	buffer.writeInt32(data.squreState)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SqureInfo;