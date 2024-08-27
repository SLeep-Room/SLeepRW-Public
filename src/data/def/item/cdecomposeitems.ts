
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDecomposeItems {
	itemId : number;
	ItemNum : number;
}

class CDecomposeItems {
    static DefaultData: CDecomposeItems = {
	itemId : 0,
	ItemNum : 0,
    }

    static Unmarshal(buffer: Buffer): CDecomposeItems { 
	const reader = new BufferReader(buffer)
try{
	CDecomposeItems.DefaultData.itemId = reader.readInt32()
	CDecomposeItems.DefaultData.ItemNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDecomposeItems.DefaultData);
    }

    static Marshal(data: CDecomposeItems): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.itemId)
	buffer.writeInt32(data.ItemNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDecomposeItems;