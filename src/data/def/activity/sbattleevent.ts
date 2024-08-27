
import {Buffer} from 'buffer'
import BufferWriter from '../../../util/buffer/BufferWriter';
import BufferReader from '../../../util/buffer/BufferReader';

interface SBattleEvent {
	curEvent : number;
	eventId : number[];
}

class SBattleEvent {
    static DefaultData: SBattleEvent = {
	curEvent : 0,
	eventId : [],
    }

    static Unmarshal(buffer: Buffer): SBattleEvent { 
	const reader = new BufferReader(buffer)
try{
	SBattleEvent.DefaultData.curEvent = reader.readInt32()
	const eventIdLength = reader.readCompactUInt32();

	for (let i = 0; i < eventIdLength; i++) {
	    SBattleEvent.DefaultData.eventId.push(reader.readInt32());
	}} catch (e) {
	console.error(e);
}
 
	return Object.assign({},SBattleEvent.DefaultData);
    }

    static Marshal(data: SBattleEvent): Buffer { 
	const buffer=new BufferWriter();
try{
	buffer.writeInt32(data.curEvent)
	buffer.writeCompactInt32(Object.keys(data.eventId).length);
	data.eventId.forEach((value) => {
		buffer.writeInt32(value)
	});} catch (e) {
	console.error(e);
}

	return buffer.getBuffer();
    }
}


export default SBattleEvent;