
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SOpenRuneAdvanced {
	roleId : number;
	baseRune : [number,number][];
}

class SOpenRuneAdvanced {
    static DefaultData: SOpenRuneAdvanced = {
	roleId : 0,
	baseRune : [],
    }

    static Unmarshal(buffer: Buffer): SOpenRuneAdvanced { 
	const reader = new BufferReader(buffer)
try{
	SOpenRuneAdvanced.DefaultData.roleId = reader.readInt32()
	const baseRuneLength = reader.readCompactUInt32();

	for (let i = 0; i < baseRuneLength; i++) {
	    SOpenRuneAdvanced.DefaultData.baseRune.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenRuneAdvanced.DefaultData);
    }

    static Marshal(data: SOpenRuneAdvanced): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.roleId)
	buffer.writeCompactInt32(Object.keys(data.baseRune).length);
	data.baseRune.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenRuneAdvanced;