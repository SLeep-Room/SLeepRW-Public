
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CUpdateFogAreal {
	sceneId : number;
	points : number[];
	prePoints : number[];
}

class CUpdateFogAreal {
    static DefaultData: CUpdateFogAreal = {
	sceneId : 0,
	points : [],
	prePoints : [],
    }

    static Unmarshal(buffer: Buffer): CUpdateFogAreal { 
	const reader = new BufferReader(buffer)
try{
	CUpdateFogAreal.DefaultData.sceneId = reader.readInt32()
	const pointsLength = reader.readCompactUInt32();

	for (let i = 0; i < pointsLength; i++) {
	    CUpdateFogAreal.DefaultData.points.push(reader.readInt16());
	}
	const prePointsLength = reader.readCompactUInt32();

	for (let i = 0; i < prePointsLength; i++) {
	    CUpdateFogAreal.DefaultData.prePoints.push(reader.readInt16());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CUpdateFogAreal.DefaultData);
    }

    static Marshal(data: CUpdateFogAreal): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.sceneId)
	buffer.writeCompactInt32(Object.keys(data.points).length);
	data.points.forEach((value) => {
		buffer.writeInt16(value)
	});
	buffer.writeCompactInt32(Object.keys(data.prePoints).length);
	data.prePoints.forEach((value) => {
		buffer.writeInt16(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CUpdateFogAreal;