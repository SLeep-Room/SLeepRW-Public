
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import flowerProgress from '../../bean/activity/flowerprogress';

interface SOpenFlowerList {
	flowerProgress : [number,typeof flowerProgress.DefaultData][];
}

class SOpenFlowerList {
    static DefaultData: SOpenFlowerList = {
	flowerProgress : [],
    }

    static Unmarshal(buffer: Buffer): SOpenFlowerList { 
	const reader = new BufferReader(buffer)
try{
	const flowerProgressLength = reader.readCompactUInt32();

	for (let i = 0; i < flowerProgressLength; i++) {
	    SOpenFlowerList.DefaultData.flowerProgress.push([reader.readInt32(),flowerProgress.Unmarshal(reader)]);
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SOpenFlowerList.DefaultData);
    }

    static Marshal(data: SOpenFlowerList): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.flowerProgress).length);
	data.flowerProgress.forEach(([key, value]) => {
		buffer.writeInt32(key)
		buffer.writeBuffer(flowerProgress.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SOpenFlowerList;