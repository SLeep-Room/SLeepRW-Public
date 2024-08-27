
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SHandbookSoulNum {
	HandBookId : number;
	soulNum : number;
}

class SHandbookSoulNum {
    static DefaultData: SHandbookSoulNum = {
	HandBookId : 0,
	soulNum : 0,
    }

    static Unmarshal(buffer: Buffer): SHandbookSoulNum { 
	const reader = new BufferReader(buffer)
try{
	SHandbookSoulNum.DefaultData.HandBookId = reader.readInt32()
	SHandbookSoulNum.DefaultData.soulNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SHandbookSoulNum.DefaultData);
    }

    static Marshal(data: SHandbookSoulNum): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.HandBookId)
	buffer.writeInt32(data.soulNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SHandbookSoulNum;