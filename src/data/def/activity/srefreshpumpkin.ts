
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SRefreshPumpkin {
	pumpkins : number[];
	refreshTime : bigint;
}

class SRefreshPumpkin {
    static DefaultData: SRefreshPumpkin = {
	pumpkins : [],
	refreshTime : 0n,
    }

    static Unmarshal(buffer: Buffer): SRefreshPumpkin { 
	const reader = new BufferReader(buffer)
try{
	const pumpkinsLength = reader.readCompactUInt32();

	for (let i = 0; i < pumpkinsLength; i++) {
	    SRefreshPumpkin.DefaultData.pumpkins.push(reader.readInt32());
	}
	SRefreshPumpkin.DefaultData.refreshTime = reader.readInt64()} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SRefreshPumpkin.DefaultData);
    }

    static Marshal(data: SRefreshPumpkin): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.pumpkins).length);
	data.pumpkins.forEach((value) => {
		buffer.writeInt32(value)
	});
	buffer.writeInt64(BigInt(data.refreshTime))} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SRefreshPumpkin;