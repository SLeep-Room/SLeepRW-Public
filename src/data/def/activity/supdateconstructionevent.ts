
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';
import updates from '../../bean/activity/summerevent';
import updateConstructions from '../../bean/activity/updateconstruction';

interface SUpdateConstructionEvent {
	updates : typeof updates.DefaultData[];
	updateConstructions : typeof updateConstructions.DefaultData[];
}

class SUpdateConstructionEvent {
    static DefaultData: SUpdateConstructionEvent = {
	updates : [],
	updateConstructions : [],
    }

    static Unmarshal(buffer: Buffer): SUpdateConstructionEvent { 
	const reader = new BufferReader(buffer)
try{
	const updatesLength = reader.readCompactUInt32();

	for (let i = 0; i < updatesLength; i++) {
	    SUpdateConstructionEvent.DefaultData.updates.push(updates.Unmarshal(reader));
	}
	const updateConstructionsLength = reader.readCompactUInt32();

	for (let i = 0; i < updateConstructionsLength; i++) {
	    SUpdateConstructionEvent.DefaultData.updateConstructions.push(updateConstructions.Unmarshal(reader));
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SUpdateConstructionEvent.DefaultData);
    }

    static Marshal(data: SUpdateConstructionEvent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeCompactInt32(Object.keys(data.updates).length);
	data.updates.forEach((value) => {
		buffer.writeBuffer(updates.Marshal(value))
	});
	buffer.writeCompactInt32(Object.keys(data.updateConstructions).length);
	data.updateConstructions.forEach((value) => {
		buffer.writeBuffer(updateConstructions.Marshal(value))
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SUpdateConstructionEvent;