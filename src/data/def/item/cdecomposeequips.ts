
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface CDecomposeEquips {
	equipKeys : number[];
}

class CDecomposeEquips {
    static DefaultData: CDecomposeEquips = {
	equipKeys : [],
    }

    static Unmarshal(buffer: Buffer): CDecomposeEquips { 
	const reader = new BufferReader(buffer)
try{
	const equipKeysLength = reader.readCompactUInt32();

	for (let i = 0; i < equipKeysLength; i++) {
	    CDecomposeEquips.DefaultData.equipKeys.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},CDecomposeEquips.DefaultData);
    }

    static Marshal(data: CDecomposeEquips): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.equipKeys).length);
	data.equipKeys.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default CDecomposeEquips;