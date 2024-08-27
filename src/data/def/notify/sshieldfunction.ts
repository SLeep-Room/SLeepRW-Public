
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SShieldFunction {
	shieldFunction : number[];
}

class SShieldFunction {
    static DefaultData: SShieldFunction = {
	shieldFunction : [],
    }

    static Unmarshal(buffer: Buffer): SShieldFunction { 
	const reader = new BufferReader(buffer)
try{
	const shieldFunctionLength = reader.readCompactUInt32();

	for (let i = 0; i < shieldFunctionLength; i++) {
	    SShieldFunction.DefaultData.shieldFunction.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SShieldFunction.DefaultData);
    }

    static Marshal(data: SShieldFunction): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.shieldFunction).length);
	data.shieldFunction.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SShieldFunction;