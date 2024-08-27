
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CRecoverSpringSpirit {
	itemId : number;
}

class CRecoverSpringSpirit {
    static DefaultData: CRecoverSpringSpirit = {
	itemId : 0,
    }

    static Unmarshal(buffer: Buffer): CRecoverSpringSpirit { 
	const reader = new BufferReader(buffer)
try{
	CRecoverSpringSpirit.DefaultData.itemId = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CRecoverSpringSpirit.DefaultData);
    }

    static Marshal(data: CRecoverSpringSpirit): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.itemId)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CRecoverSpringSpirit;