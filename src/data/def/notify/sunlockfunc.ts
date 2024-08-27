
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import funcLisk from '../../bean/notify/fununlock';

interface SUnlockFunc {
	funcLisk : typeof funcLisk.DefaultData[];
}

class SUnlockFunc {
    static DefaultData: SUnlockFunc = {
	funcLisk : [],
    }

    static Unmarshal(buffer: Buffer): SUnlockFunc { 
	const reader = new BufferReader(buffer)
try{
	const funcLiskLength = reader.readCompactUInt32();

	for (let i = 0; i < funcLiskLength; i++) {
	    SUnlockFunc.DefaultData.funcLisk.push(funcLisk.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUnlockFunc.DefaultData);
    }

    static Marshal(data: SUnlockFunc): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.funcLisk).length);
	data.funcLisk.forEach((value) => {
		buffer.writeBuffer(funcLisk.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUnlockFunc;