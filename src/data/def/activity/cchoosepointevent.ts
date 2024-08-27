
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CChoosePointEvent {
	pointID : number;
	eventIndex : number;
	eventChoice : number;
}

class CChoosePointEvent {
    static DefaultData: CChoosePointEvent = {
	pointID : 0,
	eventIndex : 0,
	eventChoice : 0,
    }

    static Unmarshal(buffer: Buffer): CChoosePointEvent { 
	const reader = new BufferReader(buffer)
try{
	CChoosePointEvent.DefaultData.pointID = reader.readInt32()
	CChoosePointEvent.DefaultData.eventIndex = reader.readInt32()
	CChoosePointEvent.DefaultData.eventChoice = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CChoosePointEvent.DefaultData);
    }

    static Marshal(data: CChoosePointEvent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.pointID)
	buffer.writeInt32(data.eventIndex)
	buffer.writeInt32(data.eventChoice)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CChoosePointEvent;