
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SQuickDecompose2Petal {
	result : number;
}

class SQuickDecompose2Petal {
    static DefaultData: SQuickDecompose2Petal = {
	result : 0,
    }

    static Unmarshal(buffer: Buffer): SQuickDecompose2Petal { 
	const reader = new BufferReader(buffer)
try{
	SQuickDecompose2Petal.DefaultData.result = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SQuickDecompose2Petal.DefaultData);
    }

    static Marshal(data: SQuickDecompose2Petal): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SQuickDecompose2Petal;