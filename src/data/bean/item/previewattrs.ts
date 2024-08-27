
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface PreviewAttrs {
	attrs : [number,number][];
}

class PreviewAttrs {
    static DefaultData: PreviewAttrs = {
	attrs : [],
    }

    static Unmarshal(buffer: BufferReader): PreviewAttrs { 
	const reader = buffer
try{
	const attrsLength = reader.readCompactUInt32();

	for (let i = 0; i < attrsLength; i++) {
	    PreviewAttrs.DefaultData.attrs.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},PreviewAttrs.DefaultData);
    }

    static Marshal(data: PreviewAttrs): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.attrs).length);
	data.attrs.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default PreviewAttrs;