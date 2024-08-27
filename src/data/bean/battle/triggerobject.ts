
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface TriggerObject {
	kind : number;
	value : number;
}

class TriggerObject {
    static DefaultData: TriggerObject = {
	kind : 0,
	value : 0,
    }

    static Unmarshal(buffer: BufferReader): TriggerObject { 
	const reader = buffer
try{
	TriggerObject.DefaultData.kind = reader.readInt32()
	TriggerObject.DefaultData.value = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},TriggerObject.DefaultData);
    }

    static Marshal(data: TriggerObject): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.kind)
	buffer.writeInt32(data.value)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default TriggerObject;