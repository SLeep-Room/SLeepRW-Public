
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRecoverSpirit {
	itemId : number;
}

class CRecoverSpirit {
    static DefaultData: CRecoverSpirit = {
	itemId : 0,
    }

    static Unmarshal(buffer: Buffer): CRecoverSpirit { 
	const reader = new BufferReader(buffer)
try{
	CRecoverSpirit.DefaultData.itemId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRecoverSpirit.DefaultData);
    }

    static Marshal(data: CRecoverSpirit): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.itemId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRecoverSpirit;