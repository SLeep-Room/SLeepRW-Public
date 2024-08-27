
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import passes from '../../bean/battle/resourcepass';

interface ResourceZone {
	status : number;
	starttime : string;
	endTime : bigint;
	passes : [number,typeof passes.DefaultData][];
	curStage : number;
}

class ResourceZone {
    static DefaultData: ResourceZone = {
	status : 0,
	starttime : "",
	endTime : 0n,
	passes : [],
	curStage : 0,
    }

    static Unmarshal(buffer: BufferReader): ResourceZone { 
	const reader = buffer
try{
	ResourceZone.DefaultData.status = reader.readInt32()
	ResourceZone.DefaultData.starttime = reader.readString()
	ResourceZone.DefaultData.endTime = reader.readInt64()
	const passesLength = reader.readCompactUInt32();

	for (let i = 0; i < passesLength; i++) {
	    ResourceZone.DefaultData.passes.push([reader.readInt32(),passes.Unmarshal(reader)]);
	}
	ResourceZone.DefaultData.curStage = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},ResourceZone.DefaultData);
    }

    static Marshal(data: ResourceZone): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.status)
	buffer.writeString(data.starttime)
	buffer.writeInt64(BigInt(data.endTime))
	buffer.writeCompactInt32(Object.keys(data.passes).length);
	data.passes.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(passes.Marshal(value))
	});
	buffer.writeInt32(data.curStage)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default ResourceZone;