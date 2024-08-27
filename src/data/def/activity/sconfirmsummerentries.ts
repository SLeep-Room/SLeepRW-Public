
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SConfirmSummerEntries {
	result : number;
}

class SConfirmSummerEntries {
    static DefaultData: SConfirmSummerEntries = {
	result : 0,
    }

    static Unmarshal(buffer: Buffer): SConfirmSummerEntries { 
	const reader = new BufferReader(buffer)
try{
	SConfirmSummerEntries.DefaultData.result = reader.readInt32()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SConfirmSummerEntries.DefaultData);
    }

    static Marshal(data: SConfirmSummerEntries): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SConfirmSummerEntries;