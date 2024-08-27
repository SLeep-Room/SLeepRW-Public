
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import updates from '../../bean/activity/summerechoevent';

interface SUpdateEchoEvent {
	updates : typeof updates.DefaultData[];
}

class SUpdateEchoEvent {
    static DefaultData: SUpdateEchoEvent = {
	updates : [],
    }

    static Unmarshal(buffer: Buffer): SUpdateEchoEvent { 
	const reader = new BufferReader(buffer)
try{
	const updatesLength = reader.readCompactUInt32();

	for (let i = 0; i < updatesLength; i++) {
	    SUpdateEchoEvent.DefaultData.updates.push(updates.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUpdateEchoEvent.DefaultData);
    }

    static Marshal(data: SUpdateEchoEvent): Buffer { 
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


export default SUpdateEchoEvent;