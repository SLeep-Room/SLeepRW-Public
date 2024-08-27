
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import manas from '../../bean/battle/randomitem';

interface STouchManaCollector {
	sceneId : number;
	key : number;
	manas : typeof manas.DefaultData[];
}

class STouchManaCollector {
    static DefaultData: STouchManaCollector = {
	sceneId : 0,
	key : 0,
	manas : [],
    }

    static Unmarshal(buffer: Buffer): STouchManaCollector { 
	const reader = new BufferReader(buffer)
try{
	STouchManaCollector.DefaultData.sceneId = reader.readInt32()
	STouchManaCollector.DefaultData.key = reader.readInt32()
	const manasLength = reader.readCompactUInt32();

	for (let i = 0; i < manasLength; i++) {
	    STouchManaCollector.DefaultData.manas.push(manas.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},STouchManaCollector.DefaultData);
    }

    static Marshal(data: STouchManaCollector): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.sceneId)
	buffer.writeInt32(data.key)
	buffer.writeCompactInt32(Object.keys(data.manas).length);
	data.manas.forEach((value) => {
		buffer.writeBuffer(manas.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default STouchManaCollector;