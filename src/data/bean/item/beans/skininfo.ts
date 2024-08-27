
import {Buffer} from 'buffer'
import BufferWriter from '../../../../util/buffer/BufferWriter';
import BufferReader from '../../../../util/buffer/BufferReader';

interface SkinInfo {
	skinID : number;
	skinStatus : number;
	isInSelling : number;
}

class SkinInfo {
    static DefaultData: SkinInfo = {
		skinID : 0,
		skinStatus : 0,
		isInSelling : 0,
    }

    static Unmarshal(buffer: BufferReader): SkinInfo { 
	const reader = buffer
try{
	SkinInfo.DefaultData.skinID = reader.readInt32()
	SkinInfo.DefaultData.skinStatus = reader.readInt32()
	SkinInfo.DefaultData.isInSelling = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SkinInfo.DefaultData);
    }

    static Marshal(data: SkinInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.skinID)
	buffer.writeInt32(data.skinStatus)
	buffer.writeInt32(data.isInSelling)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SkinInfo;