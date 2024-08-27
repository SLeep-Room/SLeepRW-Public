
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SDecomposeEquips {
	equipKeys : number[];
}

class SDecomposeEquips {
    static DefaultData: SDecomposeEquips = {
	equipKeys : [],
    }

    static Unmarshal(buffer: Buffer): SDecomposeEquips { 
	const reader = new BufferReader(buffer)
try{
	const equipKeysLength = reader.readCompactUInt32();

	for (let i = 0; i < equipKeysLength; i++) {
	    SDecomposeEquips.DefaultData.equipKeys.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SDecomposeEquips.DefaultData);
    }

    static Marshal(data: SDecomposeEquips): Buffer { 
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


export default SDecomposeEquips;