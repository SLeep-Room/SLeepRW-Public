
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import updates from '../../bean/activity/christmasevent';

interface SUpdateChristmasEvent {
	updates : typeof updates.DefaultData[];
}

class SUpdateChristmasEvent {
    static DefaultData: SUpdateChristmasEvent = {
	updates : [],
    }

    static Unmarshal(buffer: Buffer): SUpdateChristmasEvent { 
	const reader = new BufferReader(buffer)
try{
	const updatesLength = reader.readCompactUInt32();

	for (let i = 0; i < updatesLength; i++) {
	    SUpdateChristmasEvent.DefaultData.updates.push(updates.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUpdateChristmasEvent.DefaultData);
    }

    static Marshal(data: SUpdateChristmasEvent): Buffer { 
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


export default SUpdateChristmasEvent;