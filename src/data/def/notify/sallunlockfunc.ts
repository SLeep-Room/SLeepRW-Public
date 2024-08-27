
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import funcLisk from '../../bean/notify/fununlock';

interface SAllUnlockFunc {
	funcLisk : typeof funcLisk.DefaultData[];
}

class SAllUnlockFunc {
    static DefaultData: SAllUnlockFunc = {
	funcLisk : [],
    }

    static Unmarshal(buffer: Buffer): SAllUnlockFunc { 
	const reader = new BufferReader(buffer)
try{
	const funcLiskLength = reader.readCompactUInt32();

	for (let i = 0; i < funcLiskLength; i++) {
	    SAllUnlockFunc.DefaultData.funcLisk.push(funcLisk.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SAllUnlockFunc.DefaultData);
    }

    static Marshal(data: SAllUnlockFunc): Buffer { 
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


export default SAllUnlockFunc;