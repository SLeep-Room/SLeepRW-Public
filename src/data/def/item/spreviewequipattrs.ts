
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import lvAttrs from '../../bean/item/previewattrs';

interface SPreviewEquipAttrs {
	key : number;
	lvAttrs : [number,typeof lvAttrs.DefaultData][];
}

class SPreviewEquipAttrs {
    static DefaultData: SPreviewEquipAttrs = {
	key : 0,
	lvAttrs : [],
    }

    static Unmarshal(buffer: Buffer): SPreviewEquipAttrs { 
	const reader = new BufferReader(buffer)
try{
	SPreviewEquipAttrs.DefaultData.key = reader.readInt32()
	const lvAttrsLength = reader.readCompactUInt32();

	for (let i = 0; i < lvAttrsLength; i++) {
	    SPreviewEquipAttrs.DefaultData.lvAttrs.push([reader.readInt32(),lvAttrs.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SPreviewEquipAttrs.DefaultData);
    }

    static Marshal(data: SPreviewEquipAttrs): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.key)
	buffer.writeCompactInt32(Object.keys(data.lvAttrs).length);
	data.lvAttrs.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(lvAttrs.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SPreviewEquipAttrs;