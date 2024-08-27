
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SShareActivity {
	share : [number,number][];
}

class SShareActivity {
    static DefaultData: SShareActivity = {
	share : [],
    }

    static Unmarshal(buffer: Buffer): SShareActivity { 
	const reader = new BufferReader(buffer)
try{
	const shareLength = reader.readCompactUInt32();

	for (let i = 0; i < shareLength; i++) {
	    SShareActivity.DefaultData.share.push([reader.readInt32(),reader.readInt32()]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SShareActivity.DefaultData);
    }

    static Marshal(data: SShareActivity): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.share).length);
	data.share.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SShareActivity;