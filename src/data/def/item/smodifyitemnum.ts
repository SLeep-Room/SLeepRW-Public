
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SModifyItemNum {
	bagType : number;
	itemKey : number;
	itemNum : number;
	delTime : bigint[];
}

class SModifyItemNum {
    static DefaultData: SModifyItemNum = {
	bagType : 0,
	itemKey : 0,
	itemNum : 0,
	delTime : [],
    }

    static Unmarshal(buffer: Buffer): SModifyItemNum { 
	const reader = new BufferReader(buffer)
try{
	SModifyItemNum.DefaultData.bagType = reader.readInt32()
	SModifyItemNum.DefaultData.itemKey = reader.readInt32()
	SModifyItemNum.DefaultData.itemNum = reader.readInt32()
	const delTimeLength = reader.readCompactUInt32();

	for (let i = 0; i < delTimeLength; i++) {
	    SModifyItemNum.DefaultData.delTime.push(reader.readInt64());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SModifyItemNum.DefaultData);
    }

    static Marshal(data: SModifyItemNum): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.bagType)
	buffer.writeInt32(data.itemKey)
	buffer.writeInt32(data.itemNum)
	buffer.writeCompactInt32(Object.keys(data.delTime).length);
	data.delTime.forEach((value) => {
		buffer.writeInt64(BigInt(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SModifyItemNum;