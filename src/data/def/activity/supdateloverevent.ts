
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import updates from '../../bean/activity/loverevent';

interface SUpdateLoverEvent {
	updates : typeof updates.DefaultData[];
}

class SUpdateLoverEvent {
    static DefaultData: SUpdateLoverEvent = {
	updates : [],
    }

    static Unmarshal(buffer: Buffer): SUpdateLoverEvent { 
	const reader = new BufferReader(buffer)
try{
	const updatesLength = reader.readCompactUInt32();

	for (let i = 0; i < updatesLength; i++) {
	    SUpdateLoverEvent.DefaultData.updates.push(updates.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUpdateLoverEvent.DefaultData);
    }

    static Marshal(data: SUpdateLoverEvent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.updates).length);
	data.updates.forEach((value) => {
		buffer.writeBuffer(updates.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUpdateLoverEvent;