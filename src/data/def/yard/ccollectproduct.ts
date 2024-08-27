
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CCollectProduct {
	id : number;
}

class CCollectProduct {
    static DefaultData: CCollectProduct = {
	id : 0,
    }

    static Unmarshal(buffer: Buffer): CCollectProduct { 
	const reader = new BufferReader(buffer)
try{
	CCollectProduct.DefaultData.id = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CCollectProduct.DefaultData);
    }

    static Marshal(data: CCollectProduct): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.id)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CCollectProduct;