
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SIslandTouchAltar {
	result : number;
	hpInfo : [number,number][];
}

class SIslandTouchAltar {
    static DefaultData: SIslandTouchAltar = {
	result : 0,
	hpInfo : [],
    }

    static Unmarshal(buffer: Buffer): SIslandTouchAltar { 
	const reader = new BufferReader(buffer)
try{
	SIslandTouchAltar.DefaultData.result = reader.readInt32()
	const hpInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < hpInfoLength; i++) {
	    SIslandTouchAltar.DefaultData.hpInfo.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SIslandTouchAltar.DefaultData);
    }

    static Marshal(data: SIslandTouchAltar): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.result)
	buffer.writeCompactInt32(Object.keys(data.hpInfo).length);
	data.hpInfo.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SIslandTouchAltar;