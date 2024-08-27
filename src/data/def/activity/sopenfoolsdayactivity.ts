
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenFoolsDayActivity {
	state : number;
	endTime : bigint;
	floorId : number;
	floorState : number;
	functionId : number[];
	resetConfigId : number;
	closeOthers : number;
}

class SOpenFoolsDayActivity {
    static DefaultData: SOpenFoolsDayActivity = {
	state : 0,
	endTime : 0n,
	floorId : 0,
	floorState : 0,
	functionId : [],
	resetConfigId : 0,
	closeOthers : 0,
    }

    static Unmarshal(buffer: Buffer): SOpenFoolsDayActivity { 
	const reader = new BufferReader(buffer)
try{
	SOpenFoolsDayActivity.DefaultData.state = reader.readInt32()
	SOpenFoolsDayActivity.DefaultData.endTime = reader.readInt64()
	SOpenFoolsDayActivity.DefaultData.floorId = reader.readInt32()
	SOpenFoolsDayActivity.DefaultData.floorState = reader.readInt32()
	const functionIdLength = reader.readCompactUInt32();

	for (let i = 0; i < functionIdLength; i++) {
	    SOpenFoolsDayActivity.DefaultData.functionId.push(reader.readInt32());
	}
	SOpenFoolsDayActivity.DefaultData.resetConfigId = reader.readInt32()
	SOpenFoolsDayActivity.DefaultData.closeOthers = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenFoolsDayActivity.DefaultData);
    }

    static Marshal(data: SOpenFoolsDayActivity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.state)
	buffer.writeInt64(BigInt(data.endTime))
	buffer.writeInt32(data.floorId)
	buffer.writeInt32(data.floorState)
	buffer.writeCompactInt32(Object.keys(data.functionId).length);
	data.functionId.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt32(data.resetConfigId)
	buffer.writeInt32(data.closeOthers)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenFoolsDayActivity;