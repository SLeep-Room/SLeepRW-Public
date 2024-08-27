
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SScrollSceneInfo {
	sceneId : number;
	scrollSceneInfo : [number,number][];
}

class SScrollSceneInfo {
    static DefaultData: SScrollSceneInfo = {
	sceneId : 0,
	scrollSceneInfo : [],
    }

    static Unmarshal(buffer: Buffer): SScrollSceneInfo { 
	const reader = new BufferReader(buffer)
try{
	SScrollSceneInfo.DefaultData.sceneId = reader.readInt32()
	const scrollSceneInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < scrollSceneInfoLength; i++) {
	    SScrollSceneInfo.DefaultData.scrollSceneInfo.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SScrollSceneInfo.DefaultData);
    }

    static Marshal(data: SScrollSceneInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.sceneId)
	buffer.writeCompactInt32(Object.keys(data.scrollSceneInfo).length);
	data.scrollSceneInfo.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SScrollSceneInfo;