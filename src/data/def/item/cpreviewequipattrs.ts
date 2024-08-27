
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CPreviewEquipAttrs {
	key : number;
}

class CPreviewEquipAttrs {
    static DefaultData: CPreviewEquipAttrs = {
	key : 0,
    }

    static Unmarshal(buffer: Buffer): CPreviewEquipAttrs { 
	const reader = new BufferReader(buffer)
try{
	CPreviewEquipAttrs.DefaultData.key = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CPreviewEquipAttrs.DefaultData);
    }

    static Marshal(data: CPreviewEquipAttrs): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.key)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CPreviewEquipAttrs;