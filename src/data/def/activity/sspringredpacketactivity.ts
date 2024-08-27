
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SSpringRedPacketActivity {
	state : number;
	redPacketState : [number,number][];
	day : number;
}

class SSpringRedPacketActivity {
    static DefaultData: SSpringRedPacketActivity = {
	state : 0,
	redPacketState : [],
	day : 0,
    }

    static Unmarshal(buffer: Buffer): SSpringRedPacketActivity { 
	const reader = new BufferReader(buffer)
try{
	SSpringRedPacketActivity.DefaultData.state = reader.readInt32()
	const redPacketStateLength = reader.readCompactUInt32();

	for (let i = 0; i < redPacketStateLength; i++) {
	    SSpringRedPacketActivity.DefaultData.redPacketState.push([reader.readInt32(),reader.readInt32()]);
	}
	SSpringRedPacketActivity.DefaultData.day = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SSpringRedPacketActivity.DefaultData);
    }

    static Marshal(data: SSpringRedPacketActivity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)
	buffer.writeCompactInt32(Object.keys(data.redPacketState).length);
	data.redPacketState.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.day)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SSpringRedPacketActivity;