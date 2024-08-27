
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import furniture from '../../bean/yard/furniture';

interface WitchFloor {
	id : number;
	recovery : number;
	good : number;
	furniture : typeof furniture.DefaultData[];
	rolesLeftRecoveryTime : [number,bigint][];
}

class WitchFloor {
    static DefaultData: WitchFloor = {
	id : 0,
	recovery : 0,
	good : 0,
	furniture : [],
	rolesLeftRecoveryTime : [],
    }

    static Unmarshal(buffer: BufferReader): WitchFloor { 
	const reader = buffer
try{
	WitchFloor.DefaultData.id = reader.readInt32()
	WitchFloor.DefaultData.recovery = reader.readInt32()
	WitchFloor.DefaultData.good = reader.readInt32()
	const furnitureLength = reader.readCompactUInt32();

	for (let i = 0; i < furnitureLength; i++) {
	    WitchFloor.DefaultData.furniture.push(furniture.Unmarshal(reader));
	}
	const rolesLeftRecoveryTimeLength = reader.readCompactUInt32();

	for (let i = 0; i < rolesLeftRecoveryTimeLength; i++) {
	    WitchFloor.DefaultData.rolesLeftRecoveryTime.push([reader.readInt32(),reader.readInt64()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},WitchFloor.DefaultData);
    }

    static Marshal(data: WitchFloor): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)
	buffer.writeInt32(data.recovery)
	buffer.writeInt32(data.good)
	buffer.writeCompactInt32(Object.keys(data.furniture).length);
	data.furniture.forEach((value) => {
		buffer.writeBuffer(furniture.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.rolesLeftRecoveryTime).length);
	data.rolesLeftRecoveryTime.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt64(BigInt(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default WitchFloor;