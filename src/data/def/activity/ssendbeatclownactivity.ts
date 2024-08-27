
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendBeatClownActivity {
	state : number;
	receiveTimes : number;
}

class SSendBeatClownActivity {
    static DefaultData: SSendBeatClownActivity = {
	state : 0,
	receiveTimes : 0,
    }

    static Unmarshal(buffer: Buffer): SSendBeatClownActivity { 
	const reader = new BufferReader(buffer)
try{
	SSendBeatClownActivity.DefaultData.state = reader.readInt32()
	SSendBeatClownActivity.DefaultData.receiveTimes = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendBeatClownActivity.DefaultData);
    }

    static Marshal(data: SSendBeatClownActivity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)
	buffer.writeInt32(data.receiveTimes)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendBeatClownActivity;