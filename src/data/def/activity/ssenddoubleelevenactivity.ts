
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSendDoubleElevenActivity {
	state : number;
	startTime : bigint;
	endTime : bigint;
}

class SSendDoubleElevenActivity {
    static DefaultData: SSendDoubleElevenActivity = {
	state : 0,
	startTime : 0n,
	endTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SSendDoubleElevenActivity { 
	const reader = new BufferReader(buffer)
try{
	SSendDoubleElevenActivity.DefaultData.state = reader.readInt32()
	SSendDoubleElevenActivity.DefaultData.startTime = reader.readInt64()
	SSendDoubleElevenActivity.DefaultData.endTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSendDoubleElevenActivity.DefaultData);
    }

    static Marshal(data: SSendDoubleElevenActivity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)
	buffer.writeInt64(BigInt(data.startTime))
	buffer.writeInt64(BigInt(data.endTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSendDoubleElevenActivity;