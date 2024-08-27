
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import lampTask from '../../bean/yard/lamptask';
import LightSpots from '../../bean/yard/light';

interface LampStand {
	id : number;
	level : number;
	leftRefreshTime : bigint;
	lampTask : [number,typeof lampTask.DefaultData][];
	LightSpots : typeof LightSpots.DefaultData[];
	leftRefreshLightSpotTime : bigint;
	glowwormLevel : number;
	speed : number;
	white : bigint;
	dark : bigint;
	mix : bigint;
}

class LampStand {
    static DefaultData: LampStand = {
	id : 0,
	level : 0,
	leftRefreshTime : 0n,
	lampTask : [],
	LightSpots : [],
	leftRefreshLightSpotTime : 0n,
	glowwormLevel : 0,
	speed : 0,
	white : 0n,
	dark : 0n,
	mix : 0n,
    }

    static Unmarshal(buffer: BufferReader): LampStand { 
	const reader = buffer
try{
	LampStand.DefaultData.id = reader.readInt32()
	LampStand.DefaultData.level = reader.readInt32()
	LampStand.DefaultData.leftRefreshTime = reader.readInt64()
	const lampTaskLength = reader.readCompactUInt32();

	for (let i = 0; i < lampTaskLength; i++) {
	    LampStand.DefaultData.lampTask.push([reader.readInt32(),lampTask.Unmarshal(reader)]);
	}
	const LightSpotsLength = reader.readCompactUInt32();

	for (let i = 0; i < LightSpotsLength; i++) {
	    LampStand.DefaultData.LightSpots.push(LightSpots.Unmarshal(reader));
	}
	LampStand.DefaultData.leftRefreshLightSpotTime = reader.readInt64()
	LampStand.DefaultData.glowwormLevel = reader.readInt32()
	LampStand.DefaultData.speed = reader.readInt32()
	LampStand.DefaultData.white = reader.readInt64()
	LampStand.DefaultData.dark = reader.readInt64()
	LampStand.DefaultData.mix = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},LampStand.DefaultData);
    }

    static Marshal(data: LampStand): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.level)
	buffer.writeInt64(BigInt(data.leftRefreshTime))
	buffer.writeCompactInt32(Object.keys(data.lampTask).length);
	data.lampTask.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(lampTask.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.LightSpots).length);
	data.LightSpots.forEach((value) => {
		buffer.writeBuffer(LightSpots.Marshal(value))
	});
	buffer.writeInt64(BigInt(data.leftRefreshLightSpotTime))
	buffer.writeInt32(data.glowwormLevel)
	buffer.writeInt32(data.speed)
	buffer.writeInt64(BigInt(data.white))
	buffer.writeInt64(BigInt(data.dark))
	buffer.writeInt64(BigInt(data.mix))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default LampStand;