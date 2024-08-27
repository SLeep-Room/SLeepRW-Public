
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SGetSkinOverview {
	skins : [number,number][];
}

class SGetSkinOverview {
    static DefaultData: SGetSkinOverview = {
	skins : [],
    }

    static Unmarshal(buffer: Buffer): SGetSkinOverview { 
	const reader = new BufferReader(buffer)
try{
	const skinsLength = reader.readCompactUInt32();

	for (let i = 0; i < skinsLength; i++) {
	    SGetSkinOverview.DefaultData.skins.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SGetSkinOverview.DefaultData);
    }

    static Marshal(data: SGetSkinOverview): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.skins).length);
	data.skins.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SGetSkinOverview;