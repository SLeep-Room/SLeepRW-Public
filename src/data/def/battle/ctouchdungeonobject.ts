
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CTouchDungeonObject {
	sceneId : number;
	keys : number[];
}

class CTouchDungeonObject {
    static DefaultData: CTouchDungeonObject = {
	sceneId : 0,
	keys : [],
    }

    static Unmarshal(buffer: Buffer): CTouchDungeonObject { 
	const reader = new BufferReader(buffer)
try{
	CTouchDungeonObject.DefaultData.sceneId = reader.readInt32()
	const keysLength = reader.readCompactUInt32();

	for (let i = 0; i < keysLength; i++) {
	    CTouchDungeonObject.DefaultData.keys.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CTouchDungeonObject.DefaultData);
    }

    static Marshal(data: CTouchDungeonObject): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.sceneId)
	buffer.writeCompactInt32(Object.keys(data.keys).length);
	data.keys.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CTouchDungeonObject;