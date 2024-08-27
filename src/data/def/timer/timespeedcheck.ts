
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface TimeSpeedCheck {
	clientTime : bigint;
	serverTime : bigint;
}

class TimeSpeedCheck {
    static DefaultData: TimeSpeedCheck = {
	clientTime : 0n,
	serverTime : 0n,
    }

    static Unmarshal(buffer: Buffer): TimeSpeedCheck { 
	const reader = new BufferReader(buffer)
try{
	TimeSpeedCheck.DefaultData.clientTime = reader.readInt64()
	TimeSpeedCheck.DefaultData.serverTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},TimeSpeedCheck.DefaultData);
    }

    static Marshal(data: TimeSpeedCheck): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt64(BigInt(data.clientTime))
	buffer.writeInt64(BigInt(data.serverTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default TimeSpeedCheck;