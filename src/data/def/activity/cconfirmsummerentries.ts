
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CConfirmSummerEntries {
	entries : number[];
}

class CConfirmSummerEntries {
    static DefaultData: CConfirmSummerEntries = {
	entries : [],
    }

    static Unmarshal(buffer: Buffer): CConfirmSummerEntries { 
	const reader = new BufferReader(buffer)
try{
	const entriesLength = reader.readCompactUInt32();

	for (let i = 0; i < entriesLength; i++) {
	    CConfirmSummerEntries.DefaultData.entries.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CConfirmSummerEntries.DefaultData);
    }

    static Marshal(data: CConfirmSummerEntries): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.entries).length);
	data.entries.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CConfirmSummerEntries;