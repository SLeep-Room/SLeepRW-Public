
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUpdateUISortType {
	uiSortTypes : [number,number][];
}

class SUpdateUISortType {
    static DefaultData: SUpdateUISortType = {
	uiSortTypes : [],
    }

    static Unmarshal(buffer: Buffer): SUpdateUISortType { 
	const reader = new BufferReader(buffer)
try{
	const uiSortTypesLength = reader.readCompactUInt32();

	for (let i = 0; i < uiSortTypesLength; i++) {
	    SUpdateUISortType.DefaultData.uiSortTypes.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUpdateUISortType.DefaultData);
    }

    static Marshal(data: SUpdateUISortType): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.uiSortTypes).length);
	data.uiSortTypes.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUpdateUISortType;