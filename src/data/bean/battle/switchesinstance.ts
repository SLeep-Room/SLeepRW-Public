
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SwitchesInstance {
	instanceid : number;
	id : number;
	state : number;
	touch : number;
}

class SwitchesInstance {
    static DefaultData: SwitchesInstance = {
	instanceid : 0,
	id : 0,
	state : 0,
	touch : 0,
    }

    static Unmarshal(buffer: BufferReader): SwitchesInstance { 
	const reader = buffer
try{
	SwitchesInstance.DefaultData.instanceid = reader.readInt32()
	SwitchesInstance.DefaultData.id = reader.readInt32()
	SwitchesInstance.DefaultData.state = reader.readInt32()
	SwitchesInstance.DefaultData.touch = reader.readByte()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SwitchesInstance.DefaultData);
    }

    static Marshal(data: SwitchesInstance): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.instanceid)
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.state)
	buffer.writeByte(data.touch)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SwitchesInstance;