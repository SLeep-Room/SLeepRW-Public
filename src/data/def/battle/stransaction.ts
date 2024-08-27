
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface STransaction {
	kind : number;
	value : number;
}

class STransaction {
    static DefaultData: STransaction = {
	kind : 0,
	value : 0,
    }

    static Unmarshal(buffer: Buffer): STransaction { 
	const reader = new BufferReader(buffer)
try{
	STransaction.DefaultData.kind = reader.readInt32()
	STransaction.DefaultData.value = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},STransaction.DefaultData);
    }

    static Marshal(data: STransaction): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.kind)
	buffer.writeInt32(data.value)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default STransaction;