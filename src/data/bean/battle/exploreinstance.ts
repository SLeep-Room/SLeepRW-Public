
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface ExploreInstance {
	instanceid : number;
	id : number;
	state : number;
}

class ExploreInstance {
    static DefaultData: ExploreInstance = {
	instanceid : 0,
	id : 0,
	state : 0,
    }

    static Unmarshal(buffer: BufferReader): ExploreInstance { 
	const reader = buffer
try{
	ExploreInstance.DefaultData.instanceid = reader.readInt32()
	ExploreInstance.DefaultData.id = reader.readInt32()
	ExploreInstance.DefaultData.state = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ExploreInstance.DefaultData);
    }

    static Marshal(data: ExploreInstance): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.instanceid)
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.state)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ExploreInstance;