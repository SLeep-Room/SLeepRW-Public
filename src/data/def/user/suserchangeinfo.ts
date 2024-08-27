
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SUserChangeInfo {
	changeInfo : [number,number][];
}

class SUserChangeInfo {
    static DefaultData: SUserChangeInfo = {
	changeInfo : [],
    }

    static Unmarshal(buffer: Buffer): SUserChangeInfo { 
	const reader = new BufferReader(buffer)
try{
	const changeInfoLength = reader.readCompactUInt32();

	for (let i = 0; i < changeInfoLength; i++) {
	    SUserChangeInfo.DefaultData.changeInfo.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUserChangeInfo.DefaultData);
    }

    static Marshal(data: SUserChangeInfo): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.changeInfo).length);
	data.changeInfo.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUserChangeInfo;