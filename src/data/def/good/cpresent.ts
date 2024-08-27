
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CPresent {
	roleId : number;
	itemId : number;
	itemNum : number;
}

class CPresent {
    static DefaultData: CPresent = {
	roleId : 0,
	itemId : 0,
	itemNum : 0,
    }

    static Unmarshal(buffer: Buffer): CPresent { 
	const reader = new BufferReader(buffer)
try{
	CPresent.DefaultData.roleId = reader.readInt32()
	CPresent.DefaultData.itemId = reader.readInt32()
	CPresent.DefaultData.itemNum = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CPresent.DefaultData);
    }

    static Marshal(data: CPresent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeInt32(data.itemId)
	buffer.writeInt32(data.itemNum)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CPresent;